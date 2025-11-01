function SaveButtons({ }) {
    return (
        <>
            <div className="row m-1">
                <button id="save" className="m-1 btn btn-success" onClick="#">Save Settings</button>
                <button id="load" className="m-1 btn btn-warning" onClick="#">Load Settings</button>
            </div>
        </>
    );
}

export default SaveButtons;