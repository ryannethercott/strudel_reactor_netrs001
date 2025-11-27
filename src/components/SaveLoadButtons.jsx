function SaveLoadButtons({ save, load }) {
    return (
        <>
            <div className="col-3 align left">
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter settings name to save" aria-label="saveSettingName" aria-describedby="save" />
                    <button class="btn btn-outline-success" type="submit" id="save" onClick={ save }>Save</button>
                </div>
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter settings name to load" aria-label="loadSettingsName" aria-describedby="load" />
                    <button class="btn btn-outline-warning" type="submit" id="load" onClick={load}>Load</button>
                </div>
            </div>
        </>
    );
}

export default SaveLoadButtons;