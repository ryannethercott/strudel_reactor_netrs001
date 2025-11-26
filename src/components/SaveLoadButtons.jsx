function SaveLoadButtons({ save, load }) {
    return (
        <>
            <div className="col-3 align left">
                <input type="button" className="btn-check" name="btnradio" id="save" onClick={ save } />
                <label className="btn btn-outline-success m-1" htmlFor="save">Save</label>

                <input type="button" className="btn-check" name="btnradio" id="load" onClick={load} />
                <label className="btn btn-outline-warning m-1" htmlFor="load">Load</label>
            </div>
        </>
    );
}

export default SaveLoadButtons;