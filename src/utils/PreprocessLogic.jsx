function Preprocess({ inputText, volume, speed, pattern }) {

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

    let gain = matches.map(
        match => match.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${volume})`)
    );
    outputText = matches.reduce((text, original, i) => text.replaceAll(original, gain[i]), outputText);


    //let baseline = matches[0];
    //let baseLineMute = baseline.replaceAll("bassline:", "_baseline");
    //outputText = baseline.replaceAll("bassline:", "_baseline");
    //let baselineGain = baseline.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, captureGroup => `gain(${captureGroup}*${baselineVol})`);
    //outputText = outputText.replaceAll(baseline, baselineGain);

    //let mainARP = matches[1];
    //let mainARPGain = mainARP.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${mainARPVol})`);

    //let drums = matches[2];
    //let drumsGain = drums.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${drumsVol})`);

    //let drums2 = matches[3];
    //let drums2Gain = drums2.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${drums2Vol})`);

    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, mainARPGain[i]), outputText);
    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, drumsGain[i]), outputText);
    //outputText = matches.reduce((text, original, i) => text.replaceAll(original, drums2Gain[i]), outputText);
    //console.log(outputText);

    var stringArray = outputText.split(/(\s+)/);  
    for (const item of stringArray) {
        if (item.startsWith('setcpm')) {
            //console.log(item);   
            let val = item.substring(7, 9);
            outputText = outputText.replaceAll(val, speed);
        }
    }

    outputText = outputText.replaceAll("{$PATTERN}", pattern);

    return outputText;
}
export default Preprocess;