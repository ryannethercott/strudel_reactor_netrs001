function saveLogic({
    settingsName,
    volume,
    speed,
    pattern,
    baselineMute,
    main_arpMute,
    drumsMute,
    drums2Mute
}) {

    const settings = {
        settingsName: settingsName,
        volume: volume,
        speed: speed,
        pattern: pattern,
        baselineMute: 0,
        main_arpMute: 0,
        drumsMute: 0,
        drums2Mute: 0
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
    
    return (
        <>
            <div className="alert alert-success">
                <strong>Success!</strong> settings saved to database.
            </div>
        </>
    )
}
export default saveLogic;