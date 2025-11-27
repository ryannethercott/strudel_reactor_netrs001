function saveLogic({
    volume,
    speed,
    pattern,
    baselineMute,
    main_arpMute,
    drumsMute,
    drums2Mute
}) {

    const settings = {
        volume: volume,
        speed: speed,
        pattern: pattern,
        baselineMute: false,
        main_arpMute: false,
        drumsMute: false,
        drums2Mute: false
    };

    fetch(`http://localhost:5043/api/SettingsAPI/PostSettings`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
    })
        .then(response => response.json())
        .catch(error => console.error('Unable to add settings.', error));
}
export default saveLogic;