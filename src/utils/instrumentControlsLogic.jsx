function InstrumentControlsPreprocess({
    inputText,
    mute
}) {
    let outputText = inputText;

    let regex = /[a-zA-Z0-9_]+:\s*\n/gm;

    let m;

    let matches = [];

    while ((m = regex.exec(outputText)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            matches.push(match)
        });
    }

    let baseLine = matches[0];
    let baseLineGain = baseLine.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${mute})`);

    outputText = outputText.replaceAll(baseLine, baseLineGain);

    return outputText;
}

export default InstrumentControlsPreprocess;