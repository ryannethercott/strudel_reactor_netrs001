function SelectSongDropdown({ changeSong, songName }) {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {songName}
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button" id="stranger_tune" name="Stranger Tune" onClick={changeSong}>Stranger Tune</button></li>
                    <li><button className="dropdown-item" type="button" id="outrun" name="Outrun" onClick={changeSong}>Outrun</button></li>
                    <li><button className="dropdown-item" type="button" id="Riding_the_46_Cycles" name="Riding the 46 Cycles" onClick={changeSong}>Riding the 46 Cycles</button></li>
                </ul>
            </div>
        </>
    );
}

export default SelectSongDropdown;