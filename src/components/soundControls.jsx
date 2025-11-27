function GlobalSoundControls({
    volumeValue, valueSpeed,
    onVolumeChange, onSpeedChange,
    patternValue, onPatternChange
    }) {
    return (
        <>
            <div className="card-body">
                <h3 className="card-title text-center m-2">Global Sound Controls</h3>
                <div className="row m-1 form-control">
                    <label htmlFor="volume" className="form-label">Volume: {volumeValue * 100}%</label>
                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onVolumeChange} id="volume" />
                </div>

                <div className="row m-1 form-control">
                    <div className="row">
                        <label htmlFor="speed" className="form-label">Speed</label>
                        <input type="number" className="form-control" min="1" max="80" step="1"
                            value={valueSpeed} onChange={onSpeedChange} id="speed" defaultValue={valueSpeed} />
                    </div> 
                </div>

                <div className="row m-1 form-control">
                    <label htmlFor="pattern" className="form-label">Pattern: {patternValue}</label>
                    <input type="range" className="form-range" min="0" max="5" step="1" defaultValue="0" onMouseUp={onPatternChange} id="pattern" />
                </div>

                
            </div>
        </>
    );
}

export function InstrumentControls({
    muteInstrument
    }) {
    return (
        <>
            <div className="card-body">
                <h3 className="card-title text-center">Mute Instrument</h3>
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Bassline" aria-expanded="false" aria-controls="Bassline">
                                Bassline
                            </button>
                        </h2>
                        <div id="Bassline" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="form-check form-switch mb-3">
                                    <label className="form-check-label" htmlFor="baseline">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="baseline" onClick={muteInstrument} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Main_arp" aria-expanded="false" aria-controls="Main_arp">
                                Main ARP
                            </button>
                        </h2>
                        <div id="Main_arp" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="form-check form-switch mb-3">
                                    <label className="form-check-label" htmlFor="main_arp">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="main_arp" onClick={muteInstrument} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Drums" aria-expanded="false" aria-controls="Drums">
                                Drums
                            </button>
                        </h2>
                        <div id="Drums" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="form-check form-switch mb-3">
                                    <label className="form-check-label" htmlFor="drums">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="drums" onClick={muteInstrument} />
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Drums2" aria-expanded="false" aria-controls="Drums2">
                                Drums 2
                            </button>
                        </h2>
                        <div id="Drums2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="form-check form-switch mb-3">
                                    <label className="form-check-label" htmlFor="drums2">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="drums2" onClick={muteInstrument} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default GlobalSoundControls;