function SaveLoadButtons({ save, load }) {
    return (
        <>
            <div className="col-3 align left">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter settings name to save" name="saveSettingsName" aria-label="saveSettingName" aria-describedby="save" />
                    <button className="btn btn-outline-success" type="submit" id="save" onClick={ save }>Save</button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter settings name to load" name="loadSettingsName" aria-label="loadSettingsName" aria-describedby="load" />
                    <button className="btn btn-outline-warning" type="submit" id="load" onClick={load}>Load</button>
                </div>
            </div>
        </>
    );
}

export default SaveLoadButtons;