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

    outputText = outputText.replaceAll(regex, `_${matches[0]}`);

    //outputText = outputText.replaceAll('baseline:', muted)

    return outputText;
}

export default InstrumentControlsPreprocess;