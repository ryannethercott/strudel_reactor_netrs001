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
import SoundControls from './components/soundControls';
import PlayButtons from './components/PlayButtons';
import ProcButtons from './components/ProcButtons';
import PreProcessTextArea from './components/PreProcessTextArea'

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

//export function SetupButtons() {

//    document.getElementById('play').addEventListener('click', () => globalEditor.evaluate());
//    document.getElementById('stop').addEventListener('click', () => globalEditor.stop());
//    document.getElementById('process').addEventListener('click', () => {
//        Proc()
//    }
//    )
//    document.getElementById('process_play').addEventListener('click', () => {
//        if (globalEditor != null) {
//            Proc()
//            globalEditor.evaluate()
//        }
//    }
//    )
//}



//export function ProcAndPlay() {
//    if (globalEditor != null && globalEditor.repl.state.started == true) {
//        console.log(globalEditor)
//        Proc()
//        globalEditor.evaluate();
//    }
//}

//export function ProcessText(match, ...args) {

//    let replace = ""
//    if (document.getElementById('flexRadioDefault2').checked) {
//        replace = "_"
//    }

//    return replace
//}

export default function StrudelDemo() {

const hasRun = useRef(false);

    

    const handlePlay = () => {
        globalEditor.evaluate()
    }

    const handleStop = () => {
        globalEditor.stop();
    }

    const handleProc = (e) => {
        let procText = document.getElementById('proc').value;
        let procTextReplaced = e.replaceAll(procText);
        globalEditor.setCode(procTextReplaced);
    }

    const handleProcAndPlay = (e) => {
        let procText = document.getElementById('proc').value;
        setSongText(procText.target.value);
        handlePlay();
    }
 
    const [songText, setSongText] = useState(stranger_tune);

    const [volume, setVolume] = useState('1');

    const handleVolume = (e) => {
        setVolume(e.target.value);
        if (globalEditor != null) {
            let volumeText = document.getElementById('proc').value;
            let volumeTextReplaced = volumeText.replaceAll('{VOLUME}', + e.target.value);
            globalEditor.setCode(volumeTextReplaced);
            handlePlay()
        }
    }
     
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
        //SetupButtons()
        //Proc()
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
                    <div className="col-md-8" style={{ maxHeight: '45vh', overflowY: 'auto' }}>
                        <PreProcessTextArea defaultValue={songText} onChange={(e) => setSongText(e.target.value)} />
                    </div>
                    <div className="col-md-4 border">
                        <nav>
                            <ProcButtons defaultValue={songText} onProc={handleProc} onProcAndPlay={handleProcAndPlay} />
                            <PlayButtons onStop={handleStop} onPlay={handlePlay} />
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8"  style={{ maxHeight: '45vh', overflowY: 'auto' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
                    <div className="col-md-4 border">
                        <SoundControls value={volume} onChange={handleVolume} />
                    </div>
                </div>
            </div>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}