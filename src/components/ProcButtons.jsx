function ProcButtons(defaultValue, onProc, onProcAndPlay) {
    return (
        <>
            <div className="row m-1">
                <button id="process" className="m-1 btn btn-info" defaultValue={defaultValue} onClick={onProc}>Preprocess</button>
                <button id="process_play" className="m-1 btn btn-info btn-outline-primary" onClick={onProcAndPlay}>Proc & Play</button>
            </div>
        </>
    );
}

export default ProcButtons;