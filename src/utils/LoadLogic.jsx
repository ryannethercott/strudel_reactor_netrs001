function LoadLogic() {

    let settingsName = document.querySelector('[aria-label="loadSettingsName"]').value;
    
    fetch(`http://localhost:5043/api/SettingsAPI/GetSettings/?settingsSearch=${settingsName}`)
        .then(response => response.json())
        .then(data => buildData(data))
        .catch(error => console.error('Unable to load settings.', error));

    return (
        <>
            <div className="alert alert-success">
                <strong>Success!</strong> Settings loaded from database.
            </div>
        </>
    )
}

function buildData(data) {
    document.querySelector('[id="volume"]').setAttribute('value', data.VolumeLevel);
    document.querySelector('[id="speed"]').setAttribute('value', data.SongSpeed);
    document.querySelector('[id="pattern"]').setAttribute('value', data.Pattern);
    document.querySelector('[id="baseline"]').setAttribute('value', data.BaselineMute);
    document.querySelector('[id="main_arp"]').setAttribute('value', data.MainARPMute);
    document.querySelector('[id="drums"]').setAttribute('value', data.DrumsMute);
    document.querySelector('[id="drums2"]').setAttribute('value', data.Drums2Mute);
}

export default LoadLogic;