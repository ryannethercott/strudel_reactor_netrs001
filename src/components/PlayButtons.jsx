function PlayButtons({ onPlay, onStop }) {
    return (
        <>
            <div className="row m-1">
                <button id="play" className="m-1 btn btn-primary" onClick={ onPlay }>Play</button>
                <button id="stop" className="m-1 btn btn-danger" onClick={onStop}>Stop</button>
            </div>
        </>
    );
}

export default PlayButtons;