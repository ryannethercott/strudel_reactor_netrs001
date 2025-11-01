function SoundControls({ volumeValue, valueSpeed, onVolumeChange, onSpeedChange }) {
    return (
        <>
            <div className="row m-1 form-control">
                <label htmlFor="volume" className="form-label">Volume: {volumeValue}</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01" value={volumeValue} onChange={onVolumeChange} id="volume" />
            </div>
            <div className="row m-1 form-control">
                <div className="row text-center">
                    <div className="col">
                        <label htmlFor="speed1" className="form-label">Speed 1</label>
                        <input type="number" className="form-control"
                            min="10" max="350" value={valueSpeed} onChange={onSpeedChange} id="speed1" />
                    </div>
                    <div className="col">
                        <label htmlFor="speed2" className="form-label">Speed 2</label>
                        <input type="number" className="form-control"
                            min="20" max="500" value={valueSpeed} onChange={onSpeedChange} id="speed2" />
                    </div>
                    <div className="col">
                        <label htmlFor="speed3" className="form-label">Speed 3</label>
                        <input type="number" className="form-control"
                            min="2" max="20" value={valueSpeed} onChange={onSpeedChange}
                            id="speed3" placeholder={valueSpeed} />
                    </div>
                </div> 
            </div>
            <div className="row m-1 form-control">
                <p>control3</p>
            </div>
            <div className="row m-1 form-control">
                <p>control4</p>
            </div>
            <div className="row m-1 form-control">
                <p>control5</p>
            </div>
        </>
    );
}

export default SoundControls;