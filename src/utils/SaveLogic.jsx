async function SaveLogic({
    volume,
    speed,
    pattern,
    songName,
    songText
}) {
    const settingName = document.querySelector('[name="settingsName"]').value;
    const settings = {
        settingName: settingName,
        volumeLevel: volume,
        songSpeed: speed,
        pattern:  pattern
    };

    const song = {
        songName: songName,
        preProcessText: songText
    };

    await fetch('http://localhost:5043/api/settingsAPI/PostSettings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
    })
        .catch(error => console.error('Unable to add settings.', error));


    await fetch('http://localhost:5043/api/songAPI/PostSong', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(song)
    })
        .catch(error => console.error('Unable to add song.', error));

    return (
        alert("Save successful!")
    )
}



export default SaveLogic;