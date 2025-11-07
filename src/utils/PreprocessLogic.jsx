function Preprocess({ inputText, volume, speed, pattern, bass }) {

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

    let matches2 = matches.map(
        match => match.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${volume})`)
    );

    outputText = matches.reduce((text, original, i) => text.replaceAll(original, matches2[i]), outputText);

    //console.log(outputText);

    var stringArray = outputText.split(/(\s+)/);
    console.log(stringArray);   
    for (const item of stringArray) {
        if (item.startsWith('setcps')) {
            //console.log(item);   
            let val = item.substring(7, 10);
            outputText = outputText.replaceAll(val, speed);
        }
    }

    outputText = outputText.replaceAll("{$PATTERN}", pattern);

    return outputText;
}
export default Preprocess;