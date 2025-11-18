export const stranger_tune = `setcpm(35)

samples('github:algorave-dave/samples')
samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')

const gain_patterns = [
  "2",
  "{0.75 2.5}*4",
    "{0.75 2.5!9 0.75 2.5!5 0.75 2.5 0.75 2.5!7 0.75 2.5!3 <2.5 0.75> 2.5}%16",
]

const drum_structure = [
"~",
"x*4",
"{x ~!9 x ~!5 x ~ x ~!7 x ~!3 < ~ x > ~}%16",
]

const basslines = [
  "[[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2, bb1]!8]/8",
  "[[eb1, eb2]!16 [bb2, bb1]!16 [g2, g1]!16 [f2, f1]!4 [bb1, bb2]!4 [eb1, eb2]!4 [f1, f2]!4]/8"
]

const arpeggiator1 = [
"{d4 bb3 eb3 d3 bb2 eb2}%16",
"{c4 bb3 f3 c3 bb2 f2}%16",
"{d4 bb3 g3 d3 bb2 g2}%16",
"{c4 bb3 f3 c3 bb2 f2}%16",
]

const arpeggiator2 = [
"{d4 bb3 eb3 d3 bb2 eb2}%16",
"{c4 bb3 f3 c3 bb2 f2}%16",
"{d4 bb3 g3 d3 bb2 g2}%16",
"{d5 bb4 g4 d4 bb3 g3 d4 bb3 eb3 d3 bb2 eb2}%16",
]


const pattern = {$PATTERN}
const bass = 0

bassline:
note(pick(basslines, bass))
.sound("supersaw")
.postgain(2)
.room(0.6)
.lpf(700)
.room(0.4)
.postgain(pick(gain_patterns, pattern))
.gain(1)


main_arp: 
note(pick(arpeggiator1, "<0 1 2 3>/2"))
.sound("supersaw")
.lpf(300)
.adsr("0:0:.5:.1")
.room(0.6)
.lpenv(3.3)
.postgain(pick(gain_patterns, pattern))
.gain(1).log()


drums:
stack(
  s("tech:5")
  .postgain(6)
  .pcurve(2)
  .pdec(1)
  .gain(1)
  .struct(pick(drum_structure, pattern)),

  s("sh").struct("[x!3 ~!2 x!10 ~]")
  .postgain(0.5).lpf(7000)
  .bank("RolandTR808")
  .speed(0.8).jux(rev).room(sine.range(0.1,0.4)).gain(0.6),

  s("{~ ~ rim ~ cp ~ rim cp ~!2 rim ~ cp ~ < rim ~ >!2}%8 *2")
  .bank("[KorgDDM110, OberheimDmx]").speed(1.2).gain(1)
  .postgain(.25),
)

drums2: 
stack(
  s("[~ hh]*4").bank("RolandTR808").room(0.3).speed(0.75).gain(1.2),
  s("hh").struct("x*16").bank("RolandTR808")
  .gain(0.6)
  .jux(rev)
  .room(sine.range(0.1,0.4))
  .postgain(0.5),
  
  s("[psr:[2|5|6|7|8|9|12|24|25]*16]?0.1")
  .gain(0.1)
  .postgain(pick(gain_patterns, pattern))
  .hpf(1000)
  .speed(0.5)
  .rarely(jux(rev)),
)

//Remixed and reproduced from Algorave Dave's code found here: https://www.youtube.com/watch?v=ZCcpWzhekEY
// all(x => x.gain(mouseX.range(0,1)))
// all(x => x.log())

// @version 1.2`;

export const outrun =  "//\"Outrun June 25\" @by shadesDrawn\nvar cpm = 28;\n\nstack(\n\nnote(`\n[f3 ab3 g3]\n[eb3 g3 c3]\n[f3 bb3 ab3]\n[eb3 c3 g3 f3]\n`)\n  .slow(4)\n  .euclidRot(4,16,2)\n  .sound(\"sawtooth\")\n  .fm(0)\n  .lpf(800)\n  //.release(2)\n  .decay(0.12)\n  .pan(0.3)\n  .gain(1.0)\n  .delay(sine.range(0,0.75).slow(10))\n  .mask(\"<0!4 1!500>\")\n  //.phaser(1).phasersweep(2000)\n,\n\nnote(`\n[f5]\n`)\n  .euclidRot(3,16,10)\n  .sound(\"sine\")\n  .fm(0)\n  .lpf(400)\n  .pan(0.8)\n  .mask(\"<0!8 1!500>\")\n  .postgain(sine.range(0.6,1.6).slow(24))\n  .gain(1)\n,\n\nnote(`\n[c5@0.5 f4@0.5 f5@3]\n[eb5@0.5 f5@0.5 bb4@3]\n[db5@0.5 c5@0.5 f4@3]\n[f4@0.5 g4@0.5 bb4 ab4 g4]\n`)\n  .slow(4)\n  .sound(\"piano\")\n  .gain(0.5)\n  .clip(3)\n  .postgain(sine.range(1,0).slow(24))\n  .mask(\"<0!8 1!500>\")\n  .pan(0.65)\n,\n\nnote(`\n[f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1]\n[db1 ~ ~ db1 ~ ~ db1 ~ ~ eb1 ~ ~ eb1 ~ ~ eb1]\n`)\n  .slow(2)\n  .sound(\"gm_synth_bass_2:0\")\n  .lpf(800)\n  .pan(0.4)\n  .release(0.25)\n  .room(0.2)\n  .gain(1)\n,\n  \nsound(\"bd!4\")\n  .bank(\"RolandTR909\")\n  .gain(0.35)\n  .room(0.15)\n,\n\nsound(\"~ hh ~ [hh hh] ~ hh ~ hh\")\n  .bank(\"RolandTR909\")\n  .gain(0.08)\n  .crush(5)\n,\n\nsound(\"~ sd ~ [sd ~ ~ sd]\")\n  .bank(\"RolandTR909\")\n  .gain(\"0.15 0.15 0.15 0.15 0.09\")\n,\n\nnote(`\n[f4 g4 f4 g4 ab4 g4 f4@2]\n[eb4 f4 eb4 f4 c4 db4 eb4@2]\n[f4 g4 f4 g4 bb4 g4 ab4@2]\n[~ eb4 c4 bb3@2 g4@2 f4]\n`)\n  .slow(4)\n  .sound(\"gm_electric_guitar_clean:4\")\n  .lpf(2000)\n  .pan(0.65)\n  .gain(1)\n  .phaser(4).phasersweep(2000)\n  .mask(\"<0!20 1!12>\")\n,\n\n).cpm(cpm).log()\n// @version 1.1"

export const Riding_the_46_Cycles ="//\"Riding the 46 Cycles\" @by shadesDrawn (drums by superdirtspatz)\nvar cpm = 30;\nsamples('github:yaxu/clean-breaks')\n\nstack(\n\nnote(`\n[<e5 [d5 g5]>]\n[<d5 a5>]\n[<c5 [e5 d5]>]\n[<b4 b5>]\n`)\n  .slow(4)\n  .euclidRot(6,16,10)\n  .sound(\"sine\")\n  .fm(0.0)\n  .delay(sine.range(0,0.5).slow(18))\n  .gain(sine.range(0.9,0).slow(24))\n  .crush(8)\n  .pan(0.3)\n  .mask(\"<0!8 1!500>\")\n  //.hush()\n,\n\nnote(`\n[[e3,a3,c4]@2 [e3,a3,c4] [e3,a3,c4]\n[e3,a3,d4]@2 [e3,a3,d4] [e3,a3,d4]\n[e3,a3,b3]@2 [e3,a3,b3] [e3,a3,b3]\n[e3,a3,c4]@2 [e3,a3,c4] [e3,a3,c4]]!3\n\n[[e3,a3,e4]@2 [e3,a3,e4] [e3,a3,e4]\n[e3,a3,f4]@2 [e3,a3,f4] [e3,a3,f4]\n[e3,a3,g4]@2 [e3,a3,g4] [e3,a3,g4]\n[e3,a3,d4]@2 [e3,a3,d4] [e3,a3,d4]]\n`)\n  .slow(4)\n  .sound(\"sawtooth\")\n  .fm(sine.range(0,4).slow(6))\n  .lpf(1000)\n  .decay(0.3)\n  .pan(0.6)\n  .gain(sine.range(1.2,0.2).slow(20))\n  .mask(\"<0!24 1!500>\")\n  //.hush()\n,\n\nnote(`\n[d1@2 d1 d2@2 d1 g1 a1]\n[g1@2 g1 g2@2 g1 b1 c2]\n[a1@2 a1 a2@2 a1 c2 d2]!2\n\n[d1@2 d1 d2@2 d1 g1 a1]\n[g1@2 g1 g2@2 g1 b1 c2]\n[a1@2 a1 a2@2 a1 c2 d2]\n[a1@2 a1 a2@2 a1 c3 b2]\n\n`)\n  .slow(8)\n  .sound(\"gm_acoustic_bass\")\n  .gain(2)\n  .room(1)\n  .lpf(200)\n  .clip(0.7)\n  .release(0.3)\n  //.hush()\n,\n\nnote(`\n[f4,e5]\n[<[f4,d5] [f4,g5]>]\n[<[e4,c5] [[e4,a5]@2 [f4,e5] [f3,d5]]>]@2\n`)\n  .slow(4)\n  .sound(\"gm_epiano2\")\n  //.lpf(1800)\n  //.fm(2)\n  .release(3)\n  .attack(0.3)\n  .phaser(1)\n  .phasersweep(1000)\n  .pan(0.75)\n  .gain(1.5)\n  //.gain(\"<1.4!8 0!8>\")\n  //.hush()\n,\n\n//Drums from \"46 cycles\" by superdirtspatz\ns(\"movement\")\n  .loopAt(2)\n  .chop(\"<16!20 8!2 16!10>\")\n  .velocity(\"<.25 .45>*8\")\n  .struct(`<\n  x(8,8)!8 \n  x(8,8)!3 \n  x(11,16)\n  x(8,8)!3 \n  x(13,16)\n    >`)\n.when(\"<0!24 1!4 0!20>\", x=>x.shape(.1).lpf(saw.range(222, 3333).slow(4)).lpq(saw.range(8, 2).slow(4))\n       .delay(\"[.5:<0.01 0.02 0.03 0.04 0.05 0.06 0.07 [0.08 0.11]>*2:.5]\"))\n  \n.when(\"<0!30 1!4 0!12>\", x=>x.lpf(3333).shape(.3).superimpose(x=>x.late(saw.range(.00005, 0.007).slow(4))))\n  .gain(1.0)\n  //.hush()\n,\n  \n).cpm(cpm).log()\n\n// @version 1.1"