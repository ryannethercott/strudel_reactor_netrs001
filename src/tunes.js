export const stranger_tune = `setcps(0.6)

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
.gain(1)


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

export const outrun = `//"Outrun June 25" @by shadesDrawn
var cpm = 28;

stack(

note(
[f3 ab3 g3]
[eb3 g3 c3]
[f3 bb3 ab3]
[eb3 c3 g3 f3]
)
  .slow(4)
  .euclidRot(4,16,2)
  .sound("sawtooth")
  .fm(0)
  .lpf(800)
  //.release(2)
  .decay(0.12)
  .pan(0.3)
  .gain(1.0)
  .delay(sine.range(0,0.75).slow(10))
  .mask("<0!4 1!500>")
  //.phaser(1).phasersweep(2000)
,

note(
[f5]
    )
  .euclidRot(3,16,10)
  .sound("sine")
  .fm(0)
  .lpf(400)
  .pan(0.8)
  .mask("<0!8 1!500>")
  .postgain(sine.range(0.6,1.6).slow(24))
,

note(
[c5@0.5 f4 @0.5 f5 @3]
[eb5@0.5 f5@0.5 bb4@3]
[db5@0.5 c5 @0.5 f4 @3]
[f4@0.5 g4@0.5 bb4 ab4 g4]
    )
  .slow(4)
  .sound("piano")
  .gain(0.5)
  .clip(3)
  .postgain(sine.range(1,0).slow(24))
  .mask("<0!8 1!500>")
  .pan(0.65)
,

note(
[f1 ~ ~f1 ~ ~f1 ~ ~f1 ~ ~f1 ~ ~f1]
[db1 ~ ~db1 ~ ~db1 ~ ~eb1 ~ ~eb1 ~ ~eb1]
    )
  .slow(2)
  .sound("gm_synth_bass_2:0")
  .lpf(800)
  .pan(0.4)
  .release(0.25)
  .room(0.2)
,
  
sound("bd!4")
  .bank("RolandTR909")
  .gain(0.35)
  .room(0.15)
,

sound("~ hh ~ [hh hh] ~ hh ~ hh")
  .bank("RolandTR909")
  .gain(0.08)
  .crush(5)
,

sound("~ sd ~ [sd ~ ~ sd]")
  .bank("RolandTR909")
  .gain("0.15 0.15 0.15 0.15 0.09")
,

note(
[f4 g4 f4 g4 ab4 g4 f4 @2]
[eb4 f4 eb4 f4 c4 db4 eb4@2]
[f4 g4 f4 g4 bb4 g4 ab4 @2]
[~eb4 c4 bb3@2 g4@2 f4]
)
  .slow(4)
  .sound("gm_electric_guitar_clean:4")
  .lpf(2000)
  .pan(0.65)
  .gain(1)
  .phaser(4).phasersweep(2000)
  .mask("<0!20 1!12>")
,

).cpm(cpm)
// @version 1.1`;