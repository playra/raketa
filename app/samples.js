import Sound from 'react-native-sound'

import {
  SILENCE_RATIO,
  SILENCE_GAP
} from './constants'

class Sample {

  constructor (file, loops = 0) {

    this.file = file

    this.sound = new Sound(file, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log(`failed to load sample: ${file}`)
        return
      }

      this.duration = this.sound.getDuration()
      // console.log(`sample loaded: ${file}, duration: ${this.duration}`)
    })

    this.sound.setNumberOfLoops(loops)

    this.loops = loops
    this.timesPlayed = 0
  }

  play (onEnd, gap = 0 /* start time in ms */) {

    const callback = () => {
      this.timesPlayed++

      if (this.timesPlayed == this.loops + 1) {
        this.timesPlayed = 0
        this.sound.stop().release()
        onEnd()
      } else {
        console.log(`${this.file} played ${this.timesPlayed} times, need ${this.loops - this.timesPlayed + 1} more`)
        // this.sound.stop().release()
        this.sound.play(callback)
      }
    }

    this.sound.setCurrentTime(gap / 1000) // set playgap
    this.sound.play(callback)
  }

  stop () {
    this.sound.stop().release()
    this.timesPlayed = 0
    this.loops = 0
  }

  setLoops (loops) {
    this.loops = loops
  }

}

// test loop
const TABLA = 'TABLA.wav'
export const SILENCE = 'silence.aif'

// emulate silence
export const getSilenceSample = () => {
  return {
    duration: 69.81818594104308,
    loops: 0,
    file: SILENCE,
    play(onEnd){
      setTimeout(() => onEnd(), this.duration * 1000)
    },
    stop(){},
    setLoops(){}
  }
}

// G1
const S1_CRASH_FILL_BD_SN = 'S1_CRASH_FILL_BD_SN.wav'
const S1_MAIN_BD_SN = 'S1_Main_BD_SN.wav'
const S1_MAIN_BD = 'S1_Main_BD.wav'
const S2_BD_BASS_SN = 'S2_BD_BASS_SN.wav'
const S2_BD_BASS = 'S2_BD_BASS.wav'
const S2_CRASH_FILL_BD_B_SN = 'S2_CRASH_FILL_BD_B_SN.wav'
const S3_BD_BASS_SN = 'S3_BD_BASS_SN.wav'
const S3_BD_BASS = 'S3_BD_BASS.wav'
const S3_CRASH_FILL_BDBSN = 'S3_CRASH_FILL_BDBSN.wav'
const S4_BD_SUB_BD_SN = 'S4_BD_Sub_BD+SN.wav'
const S4_BD_SUB_BD = 'S4_BD_Sub_BD.wav'
const S4_CRASH_FILL_BDSN = 'S4_CRASH_FILL_BDSN.wav'

const GROUP_1 = [
  S1_CRASH_FILL_BD_SN,
  S1_MAIN_BD_SN,
  S1_MAIN_BD,
  S2_BD_BASS_SN,
  S2_BD_BASS,
  S2_CRASH_FILL_BD_B_SN,
  S3_BD_BASS_SN,
  S3_BD_BASS,
  S3_CRASH_FILL_BDBSN,
  S4_BD_SUB_BD_SN,
  S4_BD_SUB_BD,
  S4_CRASH_FILL_BDSN,
]

// G2
const S1_MIN_HATS = 'S1_Min_Hats.wav'
const S2_HATS_CLICKS = 'S2_HATS+CLICKS.wav'
const S3_HATS = 'S3_HATS.wav'
const S4_HATS_PERCS = 'S4_HATS_PERCS.wav'

const GROUP_2 = [
  S1_MIN_HATS,
  S2_HATS_CLICKS,
  S3_HATS,
  S4_HATS_PERCS,
]

// G3
const LONG_BASS_SOLO = 'Long_BASS_SOLO.wav'
const S1_BASS1 = 'S1_BASS1.wav'
const S1_BASS2 = 'S1_BASS2.wav'
const S1_BASS3 = 'S1_BASS3.wav'
const S2_BASS_2 = 'S2_BASS_2.wav'
const S3_BASS_2 = 'S3_BASS_2.wav'
const S3_BASS1 = 'S3_BASS1.wav'
const S4_BASS1 = 'S4_BASS1.wav'
const S4_SYNTH_BASS = 'S4_SYNTH_BASS.wav'

const GROUP_3 = [
  LONG_BASS_SOLO,
  S1_BASS1,
  S1_BASS2,
  S1_BASS3,
  S2_BASS_2,
  S3_BASS_2,
  S3_BASS1,
  S4_BASS1,
  S4_SYNTH_BASS,
]

// G4
const S1_CHORDS = 'S1_Chords.wav'
const S1_EGT = 'S1_ElectroGT_16bSolo.wav'
const S1_PAD = 'S1_PAD.wav'
const S2_ARP = 'S2_ARP.wav'
const S3_CHORDS = 'S3_CHORDS.wav'
const S4_CHORDS = 'S4_CHORDS.wav'
const S4_SUB_CHORD = 'S4_Sub_CHORD.wav'

const GROUP_4 = [
  S1_CHORDS,
  S1_EGT,
  S1_PAD,
  S2_ARP,
  S3_CHORDS,
  S4_CHORDS,
  S4_SUB_CHORD,
]

// G5
const S1_CHORDS_G5 = 'S1_ChordsG5.wav'
const S1_PADG5 = 'S1_PAD.wav'
const S2_PADG5 = 'S2_PADG5.wav'
const S3_PAD_THEME = 'S3_PAD_THEME.wav'
const S4_PAD = 'S4_PAD.wav'
const S4_SHORT_PAD = 'S4_SHORT_PAD.wav'
const S_E_GT_S = 'S_ElectroGT_Solo.wav'

const GROUP_5 = [
  S1_CHORDS_G5,
  S1_PADG5,
  S2_PADG5,
  S3_PAD_THEME,
  S4_PAD,
  S4_SHORT_PAD,
  S_E_GT_S,
]

// G6
const KVOX_L_D = 'KVOXfly_long_delay.wav'
const S6_VOX = 'S6_VOX.wav'
const S2_VOCODERVOICE = 'S2_VOCODERVOICE.wav'
const S4_VOCODER_VOICE = 'S4_VOCODER_VOICE.wav'
const VOX_N = 'Vox_normal.wav'
const VOX_S = 'Vox_stabil.wav'
const VOXFLY_L_D = 'VOXfly_long_delay.wav'

const GROUP_6 = [
  KVOX_L_D,
  S6_VOX,
  S2_VOCODERVOICE,
  S4_VOCODER_VOICE,
  VOX_N,
  VOX_S,
  VOXFLY_L_D,
]

// G7
const S1_FX = 'S1_FX.wav'
const S1_N_A = 'S1_NoiseArp.wav'
const S2_FX = 'S2_FX.wav'
const S3_FX = 'S3_FX.wav'
const S3_PERCUSSION = 'S3_PERCUSSION.wav'
const S7_FX = 'S7_FX.wav'
const S_I_FX = 'S_IvanFX.wav'

const GROUP_7 = [
  S1_FX,
//  S1_N_A,
  S2_FX,
  S3_FX,
  S3_PERCUSSION,
  S7_FX,
  S_I_FX,
]

// G8
const LOOP_D_H = 'LOOP_Dist_Highpass.wav'
const LOOP_M_B_D = 'LOOP_Main_Beat_Dist.wav'
const S1_LF_D = 'S1_LoFi_Dr.wav'
const S2_DRUMS_LOOP = 'S2_DRUMS_LOOP.wav'
const S3_DRUM_LOOP = 'S3_DRUM_LOOP.wav'
const S4_DRUM_LOOP = 'S4_DRUM_LOOP.wav'
const S4_LOOP_DIST_BEAT = 'S4_LOOP_DIST_BEAT.wav'
const SUB_HATS = 'Sub_HATS.wav'

const GROUP_8 = [
  LOOP_D_H,
  LOOP_M_B_D,
  S1_LF_D,
  S2_DRUMS_LOOP,
  S3_DRUM_LOOP,
  S4_DRUM_LOOP,
  S4_LOOP_DIST_BEAT,
  SUB_HATS,
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
  //GROUP_8
]

// preload samples
const GROUPS_PRELOADED = GROUPS.map(group => group.map(file => new Sample(file)))

const getRandomNumber = group => Math.floor(Math.random() * group.length)
const getRandomSample = group => Math.random() <= SILENCE_RATIO ? getSilenceSample() : group[getRandomNumber(group)]
export const countSilence = samples => samples.reduce((count, sample) => count + (sample.file === SILENCE ? 1 : 0), 0)


export const getRandomSamplesArray = () => {

  let samples = GROUPS_PRELOADED.map(getRandomSample)



  return samples
}

export const getRandomSampleFromGroup = (groupIndex) => getRandomSample(GROUPS_PRELOADED[groupIndex])

export default GROUPS
