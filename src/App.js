import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope, sound } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune, outrun, Riding_the_46_Cycles } from './tunes';
import { Collapse } from 'bootstrap';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import Preprocess from './utils/PreprocessLogic';
import { LogToNote, NoteToFrequency } from './utils/NoteToFrequencyLogic'
import InstrumentControlsPreprocess from './utils/InstrumentControlsLogic';
import SaveLogic from './utils/SaveLogic';
import GlobalSoundControls, { InstrumentControls } from './components/soundControls';
import PlayButtons from './components/PlayButtons';
import SaveLoadButtons from './components/SaveLoadButtons';
import PreProcessTextArea from './components/PreProcessTextArea';
import SelectSongDropdown from './components/SelectSongDropdown';
import D3Graph from './components/D3Graph';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let globalEditor = null;

export default function StrudelDemo() {

    const handleD3Data = (event) => {
        console.log(event.detail);
    };

    const [d3Array, setD3Array] = useState([]);
    const [note, setNote] = useState('');
    const maxItems = 10;
    const timeOut = 50;
    const maxValue = 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            getD3Data().map((d) => setNote(LogToNote(d)))
        }, timeOut);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let tempArray = [...d3Array, note];
        if (tempArray.length > maxItems) {
            tempArray.shift()
        }
        setD3Array(tempArray); 
    }, [note]);

    useEffect(() => {

        const svg = d3.select('svg');
        svg.selectAll("*").remove();

        let w = svg.node().getBoundingClientRect().width
        let h = svg.node().getBoundingClientRect().height

        const chartMargins = {
            left: 40,
            right: 0,
            top: 25,
            bottom: 80
        }

        w = w - (chartMargins.left + chartMargins.right);
        h = h - (chartMargins.top + chartMargins.bottom);

        svg.append("text")
            .attr("x", (w / 2))
            .attr("y", chartMargins.top)
            .attr("text-anchor", "middle")
            .style("font-size", "18px")
            .style("font-weight", "bold")
            .text("Note frequency Graph (Hz)");

        const barMargin = 10;
        const barWidth = w / d3Array.length;

        let yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', `translate(${chartMargins.left},${chartMargins.top})`);

        chartGroup.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", 0)
            .attr("y2", yScale(maxValue))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "blue" }
                ,{ offset: "50%", color: "green" }
                ,{ offset: "100%", color: "yellow" }
            ])
            .enter().append("stop")
            .attr("offset", (d) => d.offset)
            .attr("stop-color", (d) => d.color);

        chartGroup
            .append('path')
            .datum(d3Array.map((d) => NoteToFrequency(d)))
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x((d, i) => i * barWidth)
                .y((d, i) => yScale(d))
            )

        let yAxis = d3.axisLeft(yScale);
        chartGroup.append('g')
            .classed('axis y', true)
            .call(yAxis);

    }, [d3Array]);

    const hasRun = useRef(false);

    const handlePlay = () => {
        let outputText = Preprocess({ inputText: songText, songName: songName, volume: volume, speed: speed, pattern: pattern });
        //outputText = InstrumentControlsPreprocess({ inputText: songText, muteID: muteID })
        globalEditor.setCode(outputText);
        globalEditor.evaluate();
    }

    const handleStop = () => {
        globalEditor.stop();
    }

    const handleSongChange = (e) => {
        if (e === "stranger_tune") {
            setSongText(stranger_tune);
            globalEditor.setCode(songText);
            document.getElementById('proc').value = songText;
        }
        if (e === "outrun") {
            setSongText(outrun);
            globalEditor.setCode(songText);
            document.getElementById('proc').value = songText;
        }
        if (e === "Riding_the_46_Cycles") {
            setSongText(Riding_the_46_Cycles);
            globalEditor.setCode(songText);
            document.getElementById('proc').value = songText;
        }
    }

    const [songName, setSongName] = useState('Stranger Tune');

    const [songText, setSongText] = useState(stranger_tune);

    const [volume, setVolume] = useState('1');

    const [speed, setSpeed] = useState('35');

    const [state, setState] = useState("stop");

    const [pattern, setPattern] = useState('0');

    const [muteID, setMuteID] = useState(false);

    const [open, setOpen] = useState(false);

    const [settingsName, setSettingsName] = useState('');

    const handleSave = () => {
        SaveLogic({ volume: volume, speed: speed, pattern: pattern })
    }

    const handleLoad = () => {

    }

    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, { toggle: false })
        open ? bsCollapse.show() : bsCollapse.hide()
    }, [open]);

    useEffect(() => {
        if (state === "play") {
            handlePlay();
        }
    }, [volume, speed, pattern, muteID]);

    useEffect(() => {

        if (!hasRun.current) {
            document.addEventListener("d3Data", handleD3Data);
            console_monkey_patch();
            hasRun.current = true;
            //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
                //init canvas
                const canvas = document.getElementById('roll');
                canvas.width = canvas.width * 2;
                canvas.height = canvas.height * 2;
                const drawContext = canvas.getContext('2d');
                const drawTime = [-2, 2]; // time window of drawn haps
                globalEditor = new StrudelMirror({
                    defaultOutput: webaudioOutput,
                    getTime: () => getAudioContext().currentTime,
                    transpiler,
                    root: document.getElementById('editor'),
                    drawTime,
                    onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                    prebake: async () => {
                        initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                        const loadModules = evalScope(
                            import('@strudel/core'),
                            import('@strudel/draw'),
                            import('@strudel/mini'),
                            import('@strudel/tonal'),
                            import('@strudel/webaudio'),
                        );
                        await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                    },
                });
        }
        document.getElementById('proc').value = songText;
        globalEditor.setCode(songText);
    }, [songText]);

    return (
        <div>
            <div className="App-header">
                <h2 className="row">Strudel Demo</h2>
            </div>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <nav>
                            <PlayButtons onStop={() => { setState("stop"); handleStop() }} onPlay={() => { setState("play"); handlePlay() }} />
                            <SaveLoadButtons save={(e) => { setSettingsName(e.target.value); handleSave() }} load={handleLoad()} />
                            <SelectSongDropdown songName={songName} changeSong={(e) => { handleSongChange(e.target.id); setSongName(e.target.name); setSpeed(e.target.value) }} />  
                        </nav>
                    </div>
                    <div className="row">
                        <div style={{ maxHeight: '45vh', overflowY: 'auto' }}>
                            <PreProcessTextArea defaultValue={songText} onChange={(e) => setSongText(e.target.value)} onClick={() => setOpen(open => !open)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"  style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                            <div id="editor" />
                            <div id="output" />
                        </div>
                        <div className="col-md-4 card text-bg-dark">
                            <GlobalSoundControls
                                volumeValue={volume} onVolumeChange={(e) => setVolume(e.target.value)}
                                speedValue={speed} onSpeedChange={(e) => setSpeed(e.target.value)}
                                patternValue={pattern} onPatternChange={(e) => setPattern(e.target.value)}
                            />
                            <InstrumentControls
                                muteInstrument={(e) => {setMuteID(e.target.id)}}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <D3Graph />
                        </div>
                    </div>
                </div>
                <canvas id="roll"></canvas>
            </main >
        </div >
    );
}