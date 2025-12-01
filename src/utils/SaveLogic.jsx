async function SaveLogic({
    volume,
    speed,
    pattern,
}) {
    const settingName = document.querySelector('[name="settingsName"]').value;
    const settings = {
        settingName: settingName,
        volumeLevel: volume,
        songSpeed: speed,
        pattern:  pattern
    };

    await fetch('http://localhost:5043/api/settingsAPI/PostSettings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
    })
        .catch(error => console.error('Unable to add settings.', error));

    return (
        alert("Saved settings!")
    )
}



export default SaveLogic;