function SoundControls({ value, onChange }) {
    return (
        <>
            <div className="row">
                <label htmlFor="volume" className="form-label">Volume: {value}</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01"value={value} onChange={onChange} id="volume" />
            </div>
        </>
    );
}

export default SoundControls;