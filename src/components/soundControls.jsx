function SoundControls({ value, onChange }) {
    return (
        <>
            <div className="row m-3 border">
                <label htmlFor="volume" className="form-label">Volume: {value}</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01"value={value} onChange={onChange} id="volume" />
            </div>
            <div className="row m-3 border">
                <p>control2</p>
            </div>
            <div className="row m-3 border">
                <p>control3</p>
            </div>
            <div className="row m-3 border">
                <p>control4</p>
            </div>
            <div className="row m-3 border">
                <p>control5</p>
            </div>
        </>
    );
}

export default SoundControls;