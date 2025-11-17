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
                        <input type="number" className="form-control" min="1" max="100" step="1"
                            value={valueSpeed} onChange={onSpeedChange} id="speed" defaultValue="35" />
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
    baselineVol, onBaselineVolChange,
    baselineSpeed, onBaselineSpeedChange,
    mainARPVol, onMainARPVolChange,
    mainARPSpeed, onMainARPSpeedChange,
    drumsVol, onDrumsVolChange,
    drumsSpeed, onDrumsSpeedChange,
    drums2Vol, onDrums2VolChange,
    drums2Speed, onDrums2SpeedChange
    }) {
    return (
        <>
            <div className="card-body">
                <h3 className="card-title text-center">Instrument Sound Controls</h3>
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
                                    <label className="form-check-label" htmlFor="baselineMute">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="baselineMute" />
                                </div>
                                <div className="row">
                                    <label htmlFor="baselineVol" className="form-label">Baseline volume: {baselineVol * 100}%</label>
                                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onBaselineVolChange} id="baselineVol" />
                                </div>
                                <div className="row">
                                    <label htmlFor="baselineSpeed" className="form-label">Speed</label>
                                    <input type="number" className="form-control" min="0" max="1" step="0.01" value={baselineSpeed} onChange={onBaselineSpeedChange} id="baselineSpeed" />
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
                                    <label className="form-check-label" htmlFor="MainARPMute">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="MainARPMute" />
                                </div>
                                <div className="row">
                                    <label htmlFor="mainARPVol" className="form-label">Main ARP volume: {mainARPVol * 100}%</label>
                                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onMainARPVolChange} id="mainARPVol" />
                                </div>
                                <div className="row">
                                    <label htmlFor="mainARPSpeed" className="form-label">Speed</label>
                                    <input type="number" className="form-control" min="0" max="1" step="0.01" value={mainARPSpeed} onChange={onMainARPSpeedChange} id="mainARPSpeed" />
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
                                    <label className="form-check-label" htmlFor="drumsMute">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="drumsMute" />
                                </div>
                                <div className="row">
                                    <label htmlFor="drumsVol" className="form-label">Drums volume: {drumsVol * 100}%</label>
                                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onDrumsVolChange} id="drumsVol" />
                                </div>
                                <div className="row">
                                    <label htmlFor="drumsSpeed" className="form-label">Speed</label>
                                    <input type="number" className="form-control" min="0" max="1" step="0.01" value={drumsSpeed} onChange={onDrumsSpeedChange} id="drumsSpeed" />
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
                                    <label className="form-check-label" htmlFor="drums2Mute">Mute</label>
                                    <input className="form-check-input" type="checkbox" role="switch" id="drums2Mute" />
                                </div>
                                <div className="row">
                                    <label htmlFor="drums2Vol" className="form-label">Drums 2 volume: {drums2Vol * 100}%</label>
                                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onDrums2VolChange} id="drums2Vol" />
                                </div>
                                <div className="row">
                                    <label htmlFor="drums2Speed" className="form-label">Speed</label>
                                    <input type="number" className="form-control" min="0" max="1" step="0.01" value={drums2Speed} onChange={onDrums2SpeedChange} id="drums2Speed" />
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