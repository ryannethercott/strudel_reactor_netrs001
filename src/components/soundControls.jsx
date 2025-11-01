function SoundControls({ volumeValue, valueSpeed, onVolumeChange, onSpeedChange }) {
    return (
        <>
            <div className="row m-1 form-control">
                <label htmlFor="volume" className="form-label">Volume: {volumeValue * 100}</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01"
                    value={volumeValue} onChange={onVolumeChange} id="volume" />
            </div>
            <div className="row m-1 form-control">
                <div className="row">
                    <label htmlFor="speed" className="form-label">Speed</label>
                    <input type="number" className="form-control" min="0" max="1" step="0.01"
                        value={valueSpeed} onChange={onSpeedChange} id="speed" defaultValue="0.6" />
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