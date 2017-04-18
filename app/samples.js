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
const Drums_125Bpm_Ghimp_01 = 'Drums_125Bpm_Ghimp_01.wav'
const Drums_125Bpm_Homer_01 = 'Drums_125Bpm_Homer_01.wav'
const Drums_125Bpm_Kanister_01 = 'Drums_125Bpm_Kanister_01.wav'
const Drums_125Bpm_Loof_01 = 'Drums_125Bpm_Loof_01.wav'
const Drums_125Bpm_Tumpel_01 = 'Drums_125Bpm_Tumpel_01.wav'
const Drums_125Bpm_Veilchen_01 = 'Drums_125Bpm_Veilchen_01.wav'
const Drums_125Bpm_Veilchen_02 = 'Drums_125Bpm_Veilchen_02.wav'

const GROUP_1 = [
  // Drums_125Bpm_Ghimp_01,
  // Drums_125Bpm_Homer_01,
  // Drums_125Bpm_Kanister_01,
  // Drums_125Bpm_Loof_01,
  // Drums_125Bpm_Tumpel_01,
  Drums_125Bpm_Veilchen_01,
  Drums_125Bpm_Veilchen_02
]

// G2
const Bass_125Bpm_Atmung_Cmin_01 = 'Bass_125Bpm_Atmung_Cmin_01.wav'
const Bass_125Bpm_Ghem_Amin_01 = 'Bass_125Bpm_Ghem_Amin_01.wav'
const Bass_125Bpm_Hotel_Emin_03 = 'Bass_125Bpm_Hotel_Emin_03.wav'
const Bass_125Bpm_Kom_Gmin_03 = 'Bass_125Bpm_Kom_Gmin_03.wav'
const Bass_125Bpm_Laden_Amin_01 = 'Bass_125Bpm_Laden_Amin_01.wav'
const Bass_125Bpm_Laden_Amin_02 = 'Bass_125Bpm_Laden_Amin_02.wav'
const Bass_125Bpm_Laden_Amin_03 = 'Bass_125Bpm_Laden_Amin_03.wav'

const GROUP_2 = [
  // HATS1,
  // HATS1,
  // HATS1,
  // HATS1
  Bass_125Bpm_Atmung_Cmin_01,
  Bass_125Bpm_Ghem_Amin_01,
  // Bass_125Bpm_Hotel_Emin_03,
  // Bass_125Bpm_Kom_Gmin_03,
  // Bass_125Bpm_Laden_Amin_01,
  // Bass_125Bpm_Laden_Amin_02,
  // Bass_125Bpm_Laden_Amin_03
]

// G3
const Chords_125Bpm_Cave_Gmin_03 = 'Chords_125Bpm_Cave_Gmin_03.wav'
const Chords_125Bpm_Echter_Dmin_01 = 'Chords_125Bpm_Echter_Dmin_01.wav'
const Chords_125Bpm_Flinte_Fmin_02 = 'Chords_125Bpm_Flinte_Fmin_02.wav'
const Chords_125Bpm_Flinte_Fmin_03 = 'Chords_125Bpm_Flinte_Fmin_03.wav'
const Chords_125Bpm_Immer_Dmin_03 = 'Chords_125Bpm_Immer_Dmin_03.wav'
const Chords_125Bpm_Jacke_Fmin_02 = 'Chords_125Bpm_Jacke_Fmin_02.wav'

const GROUP_3 = [
  Chords_125Bpm_Cave_Gmin_03,
  Chords_125Bpm_Echter_Dmin_01,
  Chords_125Bpm_Flinte_Fmin_02,
  Chords_125Bpm_Flinte_Fmin_03,
  Chords_125Bpm_Immer_Dmin_03,
  Chords_125Bpm_Jacke_Fmin_02
]

// G4
const Synth_125Bpm_Atmung_Cmin_01 = 'Synth_125Bpm_Atmung_Cmin_01.wav'
const Synth_125Bpm_Echter_Dmin_03 = 'Synth_125Bpm_Echter_Dmin_03.wav'
const Synth_125Bpm_Hotel_Emin_02 = 'Synth_125Bpm_Hotel_Emin_02.wav'
const Synth_125Bpm_Laden_Amin_01 = 'Synth_125Bpm_Laden_Amin_01.wav'
const Synth_125Bpm_Offer_Dmin_01 = 'Synth_125Bpm_Offer_Dmin_01.wav'

const GROUP_4 = [
  Synth_125Bpm_Atmung_Cmin_01,
  Synth_125Bpm_Echter_Dmin_03,
  Synth_125Bpm_Hotel_Emin_02,
  Synth_125Bpm_Laden_Amin_01,
  Synth_125Bpm_Offer_Dmin_01
]

// // G5
// const S1_CHORDS_G5 = 'S1_ChordsG5.wav'
// const S1_PADG5 = 'S1_PAD.wav'
// const S2_PADG5 = 'S2_PADG5.wav'
// const S3_PAD_THEME = 'S3_PAD_THEME.wav'
// const S4_PAD = 'S4_PAD.wav'
// const S4_SHORT_PAD = 'S4_SHORT_PAD.wav'
// const S_E_GT_S = 'S_ElectroGT_Solo.wav'
//
// const GROUP_5 = [
//   //S1_CHORDS_G5,
//   S1_PADG5,
//   S2_PADG5,
//   S3_PAD_THEME,
//   S4_PAD,
//   S4_SHORT_PAD,
//   S_E_GT_S,
// ]
//
// // G6
// const KVOX_L_D = 'KVOXfly_long_delay.wav'
// const S6_VOX = 'S6_VOX.wav'
// const S2_VOCODERVOICE = 'S2_VOCODERVOICE.wav'
// const S4_VOCODER_VOICE = 'S4_VOCODER_VOICE.wav'
// const VOX_N = 'Vox_normal.wav'
// const VOX_S = 'Vox_stabil.wav'
// const VOXFLY_L_D = 'VOXfly_long_delay.wav'
//
// const GROUP_6 = [
//   KVOX_L_D,
//   S6_VOX,
//   S2_VOCODERVOICE,
//   S4_VOCODER_VOICE,
//   VOX_N,
//   VOX_S,
//   VOXFLY_L_D,
// ]
//
// // G7
// const S1_FX = 'S1_FX.wav'
// const S1_N_A = 'S1_NoiseArp.wav'
// const S2_FX = 'S2_FX.wav'
// const S3_FX = 'S3_FX.wav'
// const S3_PERCUSSION = 'S3_PERCUSSION.wav'
// const S7_FX = 'S7_FX.wav'
// const S_I_FX = 'S_IvanFX.wav'
//
// const GROUP_7 = [
//   S1_FX,
// //  S1_N_A,
//   S2_FX,
//   S3_FX,
//   // S3_PERCUSSION,
//   S7_FX,
//   S_I_FX,
// ]
//
// // G8
// const LOOP_D_H = 'LOOP_Dist_Highpass.wav'
// const LOOP_M_B_D = 'LOOP_Main_Beat_Dist.wav'
// const S1_LF_D = 'S1_LoFi_Dr.wav'
// const S2_DRUMS_LOOP = 'S2_DRUMS_LOOP.wav'
// const S3_DRUM_LOOP = 'S3_DRUM_LOOP.wav'
// const S4_DRUM_LOOP = 'S4_DRUM_LOOP.wav'
// const S4_LOOP_DIST_BEAT = 'S4_LOOP_DIST_BEAT.wav'
// const SUB_HATS = 'Sub_HATS.wav'
//
// const GROUP_8 = [
//   LOOP_D_H,
//   LOOP_M_B_D,
//   S1_LF_D,
//   S2_DRUMS_LOOP,
//   S3_DRUM_LOOP,
//   S4_DRUM_LOOP,
//   S4_LOOP_DIST_BEAT,
//   SUB_HATS,
// ]

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
  // GROUP_3,
  // GROUP_4,
  // GROUP_5,
  // GROUP_6,
  // GROUP_7,
  //SILENCE_GROUP
  //METRONOME_GROUP
  //GROUP_8
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
