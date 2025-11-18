function Preprocess({ inputText, songName, volume, speed, pattern }) {

    let outputText = inputText;
    if (songName === "Stranger Tune") {
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

        let stringArray = outputText.split(/(\s+)/);  
        for (const item of stringArray) {
            if (item.startsWith('setcpm')) {   
                let val = item.substring(7, 9);
                outputText = outputText.replaceAll(val, speed);
            }
        }

        outputText = outputText.replaceAll("{$PATTERN}", pattern);

        return outputText;
    }
    else {
        outputText = outputText.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${volume})`);

        let stringArray = outputText.split(/(\n)/);
        console.log(stringArray)
        for (const item of stringArray) {
            if (item.startsWith('var cpm =')) {
                let val = item.substring(9);
                console.log(val)
                outputText = outputText.replaceAll(val, speed);
            }
        }

        return outputText;
    }

}
export default Preprocess;