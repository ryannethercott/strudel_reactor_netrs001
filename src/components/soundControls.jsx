function SoundControls({ volumeValue, valueSpeed, onVolumeChange, onSpeedChange, patternValue, onPatternChange, bassValue, onBassChange }) {
    return (
        <>
            <div className="card-body">
                <h3 className="card-title text-center m-2">Sound Controls</h3>
                <div className="row m-1 form-control">
                    <label htmlFor="volume" className="form-label">Volume: {volumeValue * 100}%</label>
                    <input type="range" className="form-range" min="0" max="1" step="0.01" defaultValue="1" onMouseUp={onVolumeChange} id="volume" />
                </div>

                <div className="row m-1 form-control">
                    <div className="row">
                        <label htmlFor="speed" className="form-label">Speed</label>
                        <input type="number" className="form-control" min="0" max="1" step="0.01"
                            value={valueSpeed} onChange={onSpeedChange} id="speed" defaultValue="0.6" />
                    </div> 
                </div>

                <div className="row m-1 form-control">
                    <label htmlFor="pattern" className="form-label">Pattern: {patternValue}</label>
                    <input type="range" className="form-range" min="0" max="5" step="1" defaultValue="0" onMouseUp={onPatternChange} id="pattern" />
                </div>

                <div className="row m-1 form-control">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Bassline" aria-expanded="true" aria-controls="Bassline">
                                    Bassline
                                </button>
                            </h2>
                            <div id="Bassline" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>mute</p>
                                    <p>volume</p>
                                    <p>speed</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Main_arp" aria-expanded="false" aria-controls="Main_arp">
                                    Main_arp
                                </button>
                            </h2>
                            <div id="Main_arp" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>mute</p>
                                    <p>volume</p>
                                    <p>speed</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Drums" aria-expanded="false" aria-controls="Drums">
                                    Drums
                                </button>
                            </h2>
                            <div id="Drums" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>mute</p>
                                    <p>volume</p>
                                    <p>speed</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Drums2" aria-expanded="false" aria-controls="Drums2">
                                    Drums 2
                                </button>
                            </h2>
                            <div id="Drums2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>mute</p>
                                    <p>volume</p>
                                    <p>speed</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SoundControls;