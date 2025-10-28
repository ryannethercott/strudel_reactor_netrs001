function PlayButtons({ onPlay, onStop }) {
    return (
        <>
            <button id="play" className="m-1 btn btn-outline-primary" onClick={ onPlay }>Play</button>
            <button id="stop" className="m-1 btn btn-outline-danger" onClick={ onStop }>Stop</button>
        </>
    );
}

export default PlayButtons;