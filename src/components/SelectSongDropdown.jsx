function SelectSongDropdown({ changeSong, songName }) {
    return (
        <>
            <div className="col-11 m-2 dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {songName}
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button" id="stranger_tune" value="35" name="Stranger Tune" onClick={changeSong}>Stranger Tune</button></li>
                    <li><button className="dropdown-item" type="button" id="outrun" name="Outrun" value="28" onClick={changeSong}>Outrun</button></li>
                    <li><button className="dropdown-item" type="button" id="Riding_the_46_Cycles" name="Riding the 46 Cycles" value="30" onClick={changeSong}>Riding the 46 Cycles</button></li>
                </ul>
            </div>
        </>
    );
}

export default SelectSongDropdown;