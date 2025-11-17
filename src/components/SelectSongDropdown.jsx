function SelectSongDropdown({ changeSong }) {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Song
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button" id="stranger_tune" onClick={changeSong}>Stranger Tune</button></li>
                    <li><button className="dropdown-item" type="button" id="outrun" onClick={changeSong}>Outrun</button></li>
                    <li><button className="dropdown-item" type="button" id="Riding_the_46_Cycles" onClick={changeSong}>Riding the 46 Cycles</button></li>
                </ul>
            </div>
        </>
    );
}

export default SelectSongDropdown;