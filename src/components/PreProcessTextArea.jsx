function PreProcessTextArea({ defaultValue, onChange }) {
    return (
        <>
            <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text to preprocess:</label>
                <textarea className="form-control" rows="15" id="proc" defaultValue={defaultValue} onChange={onChange}></textarea>
            </div>
        </>
    );
}

export default PreProcessTextArea;