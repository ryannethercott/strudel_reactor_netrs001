function InstrumentControlsPreprocess({
    inputText,
    baselineVol,
    baselineSpeed,
    mainARPVol,
    mainARPSpeed,
    drumsVol,
    drumsSpeed,
    drums2Vol,
    drums2Speed,
}) {
    let outputText = inputText;

    let regex = /[a-zA-Z0-9_]+:\s*\n[\s\S]+?\r?\n(?=[a-zA-Z0-9_]*[:\/])/gm;

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
    let baseLineGain = baseLine.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${baselineVol})`);

    //let mainARP = matches[1];
    //let mainARPGain = mainARP.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${mainARPVol})`);

    //let drums = matches[2];
    //let drumsGain = drums.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${drumsVol})`);

    //let drums2 = matches[3];
    //let drums2Gain = drums2.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${drums2Vol})`);

    outputText = outputText.replaceAll(baseLine, baseLineGain);
    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, mainARPGain[i]), outputText);
    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, drumsGain[i]), outputText);
    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, drums2Gain[i]), outputText);

    return outputText;
}

export default InstrumentControlsPreprocess;