function ProcButtons(defaultValue, onProc, onProcAndPlay) {
    return (
        <>
            <button id="process" className="m-1 btn btn-outline-success" defaultValue={defaultValue} onClick={onProc}>Preprocess</button>
            <button id="process_play" className="m-1 btn btn-outline-info" onClick={onProcAndPlay}>Proc & Play</button>
        </>
    );
}

export default ProcButtons;