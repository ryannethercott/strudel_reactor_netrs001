function LoadLogic() {

    let settingsName = document.querySelector('[name="loadSettingsName"]').value;
    
    fetch(`http://localhost:5043/api/SettingsAPI/GetSettings/?settingsSearch=${settingsName}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Unable to load settings.', error));

    return (
        alert("Load successful!")
    )
}

function setData(data) {

    document.querySelector('[id="volume"]').setAttribute('value', data.VolumeLevel);
    document.querySelector('[id="speed"]').setAttribute('value', data.SongSpeed);
    document.querySelector('[id="pattern"]').setAttribute('value', data.Pattern);
}

export default LoadLogic;