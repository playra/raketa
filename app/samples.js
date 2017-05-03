import {
  SILENCE_RATIO,
  METRONOME
} from './constants'

import Sample from './Sample'

// test loop
const TABLA = 'TABLA.wav'
const DRUMS1 = 'DRUMS1.m4a'
const HATS1 = 'HATS1.m4a'
export const SILENCE = 'silence.aif'

// G1
const DR_BASS = 'DR_BASS.m4a'
const DR_IN_OUT = 'DR_IN_OUT.m4a'
const DR_KICK_BASS = 'DR_KICK_BASS.m4a'
const DR_MAIN = 'DR_MAIN.m4a'

const GROUP_1 = [
  DR_BASS,
  DR_IN_OUT,
  DR_KICK_BASS,
  DR_MAIN
]

// G2
const BASS_1 = 'BASS_1.m4a'
const BASS_2 = 'BASS_2.m4a'
const BASS_3 = 'BASS_3.m4a'
const BASS_4 = 'BASS_4.m4a'

const GROUP_2 = [
  BASS_1,
  BASS_2,
  BASS_3,
  BASS_4
]

// G3
const FX_1 = 'FX_1.m4a'
const FX_2 = 'FX_2.m4a'
const FX_3 = 'FX_3.m4a'
const FX_4 = 'FX_4.m4a'
const FX_5 = 'FX_5.m4a'
const FX_6 = 'FX_6.m4a'

const GROUP_3 = [
  FX_1,
  FX_2,
  FX_3,
  FX_4,
  FX_5,
  FX_6
]

// G4
const HATS_1 = 'HATS_1.m4a'
const HATS_2 = 'HATS_2.m4a'
const HATS_3 = 'HATS_3.m4a'
const HATS_4 = 'HATS_4.m4a'

const GROUP_4 = [
  HATS_1,
  HATS_2,
  HATS_3,
  HATS_4
]

// G5
const PAD_1 = 'PAD_1.m4a'
const PAD_2 = 'PAD_2.m4a'
const PAD_3 = 'PAD_3.m4a'
const PAD_4 = 'PAD_4.m4a'
const PAD_5 = 'PAD_5.m4a'
const PAD_6 = 'PAD_6.m4a'

const GROUP_5 = [
  PAD_1,
  PAD_2,
  PAD_3,
  PAD_4,
  PAD_5,
  PAD_6
]

// G6
const PERC_1 = 'PERC_1.m4a'
const PERC_2 = 'PERC_2.m4a'
const PERC_3 = 'PERC_3.m4a'
const PERC_4 = 'PERC_4.m4a'
const PERC_5 = 'PERC_5.m4a'

const GROUP_6 = [
  PERC_1,
  PERC_2,
  PERC_3,
  PERC_4,
  PERC_5
]

// G7
const SYNTH_1 = 'SYNTH_1.m4a'
const SYNTH_2 = 'SYNTH_2.m4a'
const SYNTH_3 = 'SYNTH_3.m4a'
const SYNTH_4 = 'SYNTH_4.m4a'
const SYNTH_5 = 'SYNTH_5.m4a'

const GROUP_7 = [
  SYNTH_1,
  SYNTH_2,
  SYNTH_3,
  SYNTH_4,
  SYNTH_5
]

// G8
const VOX_1 = 'VOX_1.m4a'
const VOX_2 = 'VOX_2.m4a'
const VOX_3 = 'VOX_3.m4a'
const VOX_4 = 'VOX_4.m4a'
const VOX_5 = 'VOX_5.m4a'
const VOX_6 = 'VOX_6.m4a'
const VOX_7 = 'VOX_7.m4a'

const GROUP_8 = [
  VOX_1,
  VOX_2,
  VOX_3,
  VOX_4,
  VOX_5,
  VOX_6,
  VOX_7
]

const SILENCE_GROUP = [
  SILENCE
]

const METRONOME_GROUP = [
  METRONOME
]

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
  //METRONOME_GROUP
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
