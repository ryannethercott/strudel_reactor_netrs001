import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope, sound } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import Preprocess from './utils/PreprocessLogic';
import SoundControls from './components/soundControls';
import PlayButtons from './components/PlayButtons';
import PreProcessTextArea from './components/PreProcessTextArea';
import SaveButtons from './components/SaveButtons';

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {

const hasRun = useRef(false);

    const handlePlay = () => {
        let outputText = Preprocess({ inputText: songText, volume: volume, speed: speed });
        globalEditor.setCode(outputText);
        globalEditor.evaluate();
    }

    const handleStop = () => {
        globalEditor.stop();
    }
 
    const [songText, setSongText] = useState(stranger_tune);

    const [volume, setVolume] = useState('1');

    const [speed, setSpeed] = useState('0.6')

    const [state, setState] = useState("stop");

    useEffect(() => {
        if (state === "play") {
            handlePlay();
        }
    }, [volume, speed]);

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
            document.getElementById('proc').value = stranger_tune;
        }
        globalEditor.setCode(songText);
    }, [songText]);

    return (
        <div>
            <div className="App-header">
            <h2>Strudel Demo</h2>
            </div>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <nav>
                            <PlayButtons onStop={() => { setState("stop"); handleStop() }} onPlay={() => { setState("play"); handlePlay() }} />
                            {/*<SaveButtons />*/}
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-md-8" style={{ maxHeight: '45vh', overflowY: 'auto' }}>
                            <PreProcessTextArea defaultValue={songText} onChange={(e) => setSongText(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"  style={{ maxHeight: '45vh', overflowY: 'auto' }}>
                            <div id="editor" />
                            <div id="output" />
                        </div>
                        <div className="col-md-4 border">
                            <SoundControls
                                volumeValue={volume} onVolumeChange={(e) => setVolume(e.target.value)}
                                speedValue={speed} onSpeedChange={(e) => setSpeed(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <canvas id="roll"></canvas>
            </main >
        </div >
    );


}