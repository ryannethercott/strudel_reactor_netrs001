async function SaveLogic({
    settingName,
    volume,
    speed,
    pattern,
}) {

    const settings = [
        settingName,
        volume,
        speed,
        pattern
    ];

    await fetch(`http://localhost:5043/api/SettingsAPI/PostSettings`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(settings)
    })
        .catch(error => console.error('Unable to add settings.', error));
    
    return (
        alert("Save successful!")
    )
}
export default SaveLogic;