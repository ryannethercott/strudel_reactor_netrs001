# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

DESCRIPTION:

Components:
	Play - processes the text and plays the code provided
	Stop - stops current process
	Song dropdown - song options to select
	Preprocess text area collapse - hide or reveal text area to change code live
	Volume range slider - global volume slider to lower or raise volume level
	Speed number input - global song speed input to change the pace of the song
	Pattern range slider - adds beat pattern to stranger tunes song
	Mute intruments accordion - acordion of all instruments in stranger tunes song
	Mute switches - ideally mutes the desired instrument. Wasn't able to hook it up in time.

The app is pretty easy to use. No hidden feature. If error pops up a refresh is required because processing was inturupted.

no notes for GIGA HD I wasn't able to complete a few basic features

Video presentation link: https://drive.google.com/file/d/17f6La0WqAKToWDGmqvqzbwdFgR6OgJLp/view?usp=sharing

Songs used:
"//\"Outrun June 25\" @by shadesDrawn\nvar cpm = 28;\n\nstack(\n\nnote(`\n[f3 ab3 g3]\n[eb3 g3 c3]\n[f3 bb3 ab3]\n[eb3 c3 g3 f3]\n`)\n  .slow(4)\n  .euclidRot(4,16,2)\n  .sound(\"sawtooth\")\n  .fm(0)\n  .lpf(800)\n  //.release(2)\n  .decay(0.12)\n  .pan(0.3)\n  .gain(1.0)\n  .delay(sine.range(0,0.75).slow(10))\n  .mask(\"<0!4 1!500>\")\n  //.phaser(1).phasersweep(2000)\n,\n\nnote(`\n[f5]\n`)\n  .euclidRot(3,16,10)\n  .sound(\"sine\")\n  .fm(0)\n  .lpf(400)\n  .pan(0.8)\n  .mask(\"<0!8 1!500>\")\n  .postgain(sine.range(0.6,1.6).slow(24))\n  .gain(1)\n,\n\nnote(`\n[c5@0.5 f4@0.5 f5@3]\n[eb5@0.5 f5@0.5 bb4@3]\n[db5@0.5 c5@0.5 f4@3]\n[f4@0.5 g4@0.5 bb4 ab4 g4]\n`)\n  .slow(4)\n  .sound(\"piano\")\n  .gain(0.5)\n  .clip(3)\n  .postgain(sine.range(1,0).slow(24))\n  .mask(\"<0!8 1!500>\")\n  .pan(0.65)\n,\n\nnote(`\n[f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1]\n[db1 ~ ~ db1 ~ ~ db1 ~ ~ eb1 ~ ~ eb1 ~ ~ eb1]\n`)\n  .slow(2)\n  .sound(\"gm_synth_bass_2:0\")\n  .lpf(800)\n  .pan(0.4)\n  .release(0.25)\n  .room(0.2)\n  .gain(1)\n,\n  \nsound(\"bd!4\")\n  .bank(\"RolandTR909\")\n  .gain(0.35)\n  .room(0.15)\n,\n\nsound(\"~ hh ~ [hh hh] ~ hh ~ hh\")\n  .bank(\"RolandTR909\")\n  .gain(0.08)\n  .crush(5)\n,\n\nsound(\"~ sd ~ [sd ~ ~ sd]\")\n  .bank(\"RolandTR909\")\n  .gain(\"0.15 0.15 0.15 0.15 0.09\")\n,\n\nnote(`\n[f4 g4 f4 g4 ab4 g4 f4@2]\n[eb4 f4 eb4 f4 c4 db4 eb4@2]\n[f4 g4 f4 g4 bb4 g4 ab4@2]\n[~ eb4 c4 bb3@2 g4@2 f4]\n`)\n  .slow(4)\n  .sound(\"gm_electric_guitar_clean:4\")\n  .lpf(2000)\n  .pan(0.65)\n  .gain(1)\n  .phaser(4).phasersweep(2000)\n  .mask(\"<0!20 1!12>\")\n,\n\n).cpm(cpm).log()\n// @version 1.1"
"//\"Riding the 46 Cycles\" @by shadesDrawn (drums by superdirtspatz)\nvar cpm = 30;\nsamples('github:yaxu/clean-breaks')\n\nstack(\n\nnote(`\n[<e5 [d5 g5]>]\n[<d5 a5>]\n[<c5 [e5 d5]>]\n[<b4 b5>]\n`)\n  .slow(4)\n  .euclidRot(6,16,10)\n  .sound(\"sine\")\n  .fm(0.0)\n  .delay(sine.range(0,0.5).slow(18))\n  .gain(sine.range(0.9,0).slow(24))\n  .crush(8)\n  .pan(0.3)\n  .mask(\"<0!8 1!500>\")\n  //.hush()\n,\n\nnote(`\n[[e3,a3,c4]@2 [e3,a3,c4] [e3,a3,c4]\n[e3,a3,d4]@2 [e3,a3,d4] [e3,a3,d4]\n[e3,a3,b3]@2 [e3,a3,b3] [e3,a3,b3]\n[e3,a3,c4]@2 [e3,a3,c4] [e3,a3,c4]]!3\n\n[[e3,a3,e4]@2 [e3,a3,e4] [e3,a3,e4]\n[e3,a3,f4]@2 [e3,a3,f4] [e3,a3,f4]\n[e3,a3,g4]@2 [e3,a3,g4] [e3,a3,g4]\n[e3,a3,d4]@2 [e3,a3,d4] [e3,a3,d4]]\n`)\n  .slow(4)\n  .sound(\"sawtooth\")\n  .fm(sine.range(0,4).slow(6))\n  .lpf(1000)\n  .decay(0.3)\n  .pan(0.6)\n  .gain(sine.range(1.2,0.2).slow(20))\n  .mask(\"<0!24 1!500>\")\n  //.hush()\n,\n\nnote(`\n[d1@2 d1 d2@2 d1 g1 a1]\n[g1@2 g1 g2@2 g1 b1 c2]\n[a1@2 a1 a2@2 a1 c2 d2]!2\n\n[d1@2 d1 d2@2 d1 g1 a1]\n[g1@2 g1 g2@2 g1 b1 c2]\n[a1@2 a1 a2@2 a1 c2 d2]\n[a1@2 a1 a2@2 a1 c3 b2]\n\n`)\n  .slow(8)\n  .sound(\"gm_acoustic_bass\")\n  .gain(2)\n  .room(1)\n  .lpf(200)\n  .clip(0.7)\n  .release(0.3)\n  //.hush()\n,\n\nnote(`\n[f4,e5]\n[<[f4,d5] [f4,g5]>]\n[<[e4,c5] [[e4,a5]@2 [f4,e5] [f3,d5]]>]@2\n`)\n  .slow(4)\n  .sound(\"gm_epiano2\")\n  //.lpf(1800)\n  //.fm(2)\n  .release(3)\n  .attack(0.3)\n  .phaser(1)\n  .phasersweep(1000)\n  .pan(0.75)\n  .gain(1.5)\n  //.gain(\"<1.4!8 0!8>\")\n  //.hush()\n,\n\n//Drums from \"46 cycles\" by superdirtspatz\ns(\"movement\")\n  .loopAt(2)\n  .chop(\"<16!20 8!2 16!10>\")\n  .velocity(\"<.25 .45>*8\")\n  .struct(`<\n  x(8,8)!8 \n  x(8,8)!3 \n  x(11,16)\n  x(8,8)!3 \n  x(13,16)\n    >`)\n.when(\"<0!24 1!4 0!20>\", x=>x.shape(.1).lpf(saw.range(222, 3333).slow(4)).lpq(saw.range(8, 2).slow(4))\n       .delay(\"[.5:<0.01 0.02 0.03 0.04 0.05 0.06 0.07 [0.08 0.11]>*2:.5]\"))\n  \n.when(\"<0!30 1!4 0!12>\", x=>x.lpf(3333).shape(.3).superimpose(x=>x.late(saw.range(.00005, 0.007).slow(4))))\n  .gain(1.0)\n  //.hush()\n,\n  \n).cpm(cpm).log()\n\n// @version 1.1"

No AI tools were used

