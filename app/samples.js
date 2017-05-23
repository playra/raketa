import {
  SILENCE_RATIO,
  METRONOME
} from './constants'

import Sample from './core/Sample'

// test loop
// const TABLA = 'TABLA.wav'
// const DRUMS1 = 'DRUMS1.m4a'
// const HATS1 = 'HATS1.m4a'
export const SILENCE = 'silence.aif'

// G1
const S5_AFTERBEATISILENCE_16BEATS = 'S5_AFTERBEATISILENCE_16BEATS.m4a'
const S5_BDBASS_16BEATS = 'S5_BDBASS_16BEATS.m4a'
const S5_FILLBEAT_32BEATS = 'S5_FILLBEAT_32BEATS.m4a'
const S5_MAINBEAT_16BEATS = 'S5_MAINBEAT_16BEATS.m4a'

const GROUP_1 = [
  S5_AFTERBEATISILENCE_16BEATS,
  S5_BDBASS_16BEATS,
  S5_FILLBEAT_32BEATS,
  S5_MAINBEAT_16BEATS
]

// G2
const S5_BASS1_16BEATS = 'S5_BASS1_16BEATS.m4a'
const S5_BASS2_32BEATS = 'S5_BASS2_32BEATS.m4a'
const S5_BASS3_16BEATS = 'S5_BASS3_16BEATS.m4a'

const GROUP_2 = [
  S5_BASS1_16BEATS,
  S5_BASS2_32BEATS,
  S5_BASS3_16BEATS
]

// G3
const S5_HATS1_16BEATS = 'S5_HATS1_16BEATS.m4a'
const S5_HATS2_16BEATS = 'S5_HATS2_16BEATS.m4a'

const GROUP_3 = [
  S5_HATS1_16BEATS,
  S5_HATS2_16BEATS
]

// G4
const S5_CHORDS1_32BEATS = 'S5_CHORDS1_32BEATS.m4a'
const S5_CHORDS3_32BEATS = 'S5_CHORDS3_32BEATS.m4a'
const S5_CHORDS_32BEATS = 'S5_CHORDS_32BEATS.m4a'

const GROUP_4 = [
  S5_CHORDS1_32BEATS,
  S5_CHORDS3_32BEATS,
  S5_CHORDS_32BEATS
]

// G5
const S5_SYNTH1_16BEATS = 'S5_SYNTH1_16BEATS.m4a'
const S5_SYNTH2_32BEATS = 'S5_SYNTH2_32BEATS.m4a'

const GROUP_5 = [
  S5_SYNTH1_16BEATS,
  S5_SYNTH2_32BEATS
]

// G6
const S5_PERC1_16BEATS = 'S5_PERC1_16BEATS.m4a'

const GROUP_6 = [
  S5_PERC1_16BEATS
]

// G7
const S5_FX_32BEATS = 'S5_FX_32BEATS.m4a'

const GROUP_7 = [
  S5_FX_32BEATS
]

// G8
const S5_VOX1_32BEATS = 'S5_VOX1_32BEATS.m4a'
const S5_VOX2_16BEATS = 'S5_VOX2_16BEATS.m4a'

const GROUP_8 = [
  S5_VOX1_32BEATS,
  S5_VOX2_16BEATS
]

// const SILENCE_GROUP = [
//  SILENCE
// ]

// const METRONOME_GROUP = [
// METRONOME
// ]

// todo LOOP GAP PER GROUP
const GROUPS = [
  GROUP_1,
  GROUP_2,
  GROUP_3,
  GROUP_4,
  GROUP_5,
  GROUP_6,
  GROUP_7,
  // SILENCE_GROUP
  // METRONOME_GROUP
  GROUP_8
]

// preload samples
const GROUPS_PRELOADED = GROUPS.map(group => group.map(file => new Sample(file)))
const GROUPS_SILENCE = GROUPS.map(group => new Sample(SILENCE))

const getRandomNumber = group => Math.floor(Math.random() * group.length)
const getRandomSample = (group, groupIndex) => {

  if (group.length === 1) {
    // if metronome (deprecated?)
    return group[0]
  } else {
    if (Math.random() <= SILENCE_RATIO) {
      return GROUPS_SILENCE[groupIndex]
    } else {
      return group[getRandomNumber(group)]
    }
  }
}

export const countSilence = samples => samples.reduce((count, sample) => count + (sample.filename === SILENCE ? 1 : 0), 0)
export const getRandomSamplesArray = () => GROUPS_PRELOADED.map(getRandomSample)
export const getRandomSampleFromGroup = (groupIndex) => getRandomSample(GROUPS_PRELOADED[groupIndex], groupIndex)

export default GROUPS
