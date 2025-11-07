function PlayButtons({ onPlay, onStop }) {
    return (
        <>
            <div className="text-center">
                <input type="radio" className="btn-check" name="btnradio" id="play" onClick={onPlay} />
                <label className="btn btn-outline-primary m-1" htmlFor="play">Play</label>

                <input type="radio" className="btn-check" name="btnradio" id="stop" onClick={onStop} />
                <label className="btn btn-outline-danger m-1" htmlFor="stop">Stop</label>
            </div>
        </>
    );
}

export default PlayButtons;