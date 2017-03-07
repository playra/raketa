import Sound from 'react-native-sound'

let samplesCount = 0

const getSample = file => {
  const sample = new Sound(file, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(`failed to load sample: ${file}`)
      return
    }

    console.log(`sample loaded: ${file}`)
  })

  sample.setNumberOfLoops(-1)

  samplesCount++
  return sample
}

// test loop
const TABLA   = getSample('TABLA.wav')
const SILENCE = getSample('silence.aif')

// G1
const S1_CRASH_FILL_BD_SN   = getSample('S1_CRASH_FILL_BD_SN.wav')
const S1_MAIN_BD_SN         = getSample('S1_Main_BD_SN.wav')
const S1_MAIN_BD            = getSample('S1_Main_BD.wav')
const S2_BD_BASS_SN         = getSample('S2_BD_BASS_SN.wav')
const S2_BD_BASS            = getSample('S2_BD_BASS.wav')
const S2_CRASH_FILL_BD_B_SN = getSample('S2_CRASH_FILL_BD_B_SN.wav')
const S3_BD_BASS_SN         = getSample('S3_BD_BASS_SN.wav')
const S3_BD_BASS            = getSample('S3_BD_BASS.wav')
const S3_CRASH_FILL_BDBSN   = getSample('S3_CRASH_FILL_BDBSN.wav')
const S4_BD_SUB_BD_SN       = getSample('S4_BD_Sub_BD+SN.wav')
const S4_BD_SUB_BD          = getSample('S4_BD_Sub_BD.wav')
const S4_CRASH_FILL_BDSN    = getSample('S4_CRASH_FILL_BDSN.wav')

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
  S4_CRASH_FILL_BDSN
]

// G2
const S1_MIN_HATS    = getSample('S1_Min_Hats.wav')
const S2_HATS_CLICKS = getSample('S2_HATS+CLICKS.wav')
const S3_HATS        = getSample('S3_HATS.wav')
const S4_HATS_PERCS  = getSample('S4_HATS_PERCS.wav')

const GROUP_2 = [
  S1_MIN_HATS,
  SILENCE,
  S2_HATS_CLICKS,
  S3_HATS,
  SILENCE,
  S4_HATS_PERCS,
]

// G3
const LONG_BASS_SOLO = getSample('Long_BASS_SOLO.wav')
const S1_BASS1       = getSample('S1_BASS1.wav')
const S1_BASS2       = getSample('S1_BASS2.wav')
const S1_BASS3       = getSample('S1_BASS3.wav')
const S2_BASS_2      = getSample('S2_BASS_2.wav')
const S3_BASS_2      = getSample('S3_BASS_2.wav')
const S3_BASS1       = getSample('S3_BASS1.wav')
const S4_BASS1       = getSample('S4_BASS1.wav')
const S4_SYNTH_BASS  = getSample('S4_SYNTH_BASS.wav')

const GROUP_3 = [
  LONG_BASS_SOLO,
  S1_BASS1,
  SILENCE,
  S1_BASS2,
  S1_BASS3,
  S2_BASS_2,
  S3_BASS_2,
  SILENCE,
  S3_BASS1,
  S4_BASS1,
  SILENCE,
  S4_SYNTH_BASS,
]

// G4
const S1_CHORDS    = getSample('S1_Chords.wav')
const S1_EGT       = getSample('S1_ElectroGT_16bSolo.wav')
const S1_PAD       = getSample('S1_PAD.wav')
const S2_ARP       = getSample('S2_ARP.wav')
const S3_CHORDS    = getSample('S3_CHORDS.wav')
const S4_CHORDS    = getSample('S4_CHORDS.wav')
const S4_SUB_CHORD = getSample('S4_Sub_CHORD.wav')

const GROUP_4 = [
  S1_CHORDS,
  S1_EGT,
  SILENCE,
  S1_PAD,
  S2_ARP,
  SILENCE,
  S3_CHORDS,
  SILENCE,
  S4_CHORDS,
  SILENCE,
  S4_SUB_CHORD,
]

// G5
const S1_CHORDS_G5 = getSample('S1_ChordsG5.wav')
const S1_PADG5     = getSample('S1_PAD.wav')
const S2_PADG5     = getSample('S2_PADG5.wav')
const S3_PAD_THEME = getSample('S3_PAD_THEME.wav')
const S4_PAD       = getSample('S4_PAD.wav')
const S4_SHORT_PAD = getSample('S4_SHORT_PAD.wav')
const S_E_GT_S     = getSample('S_ElectroGT_Solo.wav')

const GROUP_5 = [
  S1_CHORDS_G5,
  S1_PADG5,
  SILENCE,
  S2_PADG5,
  S3_PAD_THEME,
  SILENCE,
  S4_PAD,
  S4_SHORT_PAD,
  SILENCE,
  S_E_GT_S,
]

// G6
const KVOX_L_D         = getSample('KVOXfly_long_delay.wav')
const S6_VOX           = getSample('S6_VOX.wav')
const S2_VOCODERVOICE  = getSample('S2_VOCODERVOICE.wav')
const S4_VOCODER_VOICE = getSample('S4_VOCODER_VOICE.wav')
const VOX_N            = getSample('Vox_normal.wav')
const VOX_S            = getSample('Vox_stabil.wav')
const VOXFLY_L_D       = getSample('VOXfly_long_delay.wav')

const GROUP_6 = [
  KVOX_L_D,
  S6_VOX,
  SILENCE,
  S2_VOCODERVOICE,
  SILENCE,
  S4_VOCODER_VOICE,
  SILENCE,
  VOX_N,
  SILENCE,
  VOX_S,
  SILENCE,
  VOXFLY_L_D,
]

// G7
const S1_FX         = getSample('S1_FX.wav')
const S1_N_A        = getSample('S1_NoiseArp.wav')
const S2_FX         = getSample('S2_FX.wav')
const S3_FX         = getSample('S3_FX.wav')
const S3_PERCUSSION = getSample('S3_PERCUSSION.wav')
const S7_FX         = getSample('S7_FX.wav')
const S_I_FX        = getSample('S_IvanFX.wav')

const GROUP_7 = [
  S1_FX,
  S1_N_A,
  S2_FX,
  S3_FX,
  SILENCE,
  S3_PERCUSSION,
  S7_FX,
  SILENCE,
  S_I_FX,
]

// G8
const LOOP_D_H          = getSample('LOOP_Dist_Highpass.wav')
const LOOP_M_B_D        = getSample('LOOP_Main_Beat_Dist.wav')
const S1_LF_D           = getSample('S1_LoFi_Dr.wav')
const S2_DRUMS_LOOP     = getSample('S2_DRUMS_LOOP.wav')
const S3_DRUM_LOOP      = getSample('S3_DRUM_LOOP.wav')
const S4_DRUM_LOOP      = getSample('S4_DRUM_LOOP.wav')
const S4_LOOP_DIST_BEAT = getSample('S4_LOOP_DIST_BEAT.wav')
const SUB_HATS          = getSample('Sub_HATS.wav')

const GROUP_8 = [
  LOOP_D_H,
  SILENCE,
  LOOP_M_B_D,
  S1_LF_D,
  S2_DRUMS_LOOP,
  SILENCE,
  S3_DRUM_LOOP,
  S4_DRUM_LOOP,
  SILENCE,
  S4_LOOP_DIST_BEAT,
  SUB_HATS,
]

export default [
  GROUP_1,
  GROUP_2,
  GROUP_3,
  GROUP_4,
  GROUP_5,
  GROUP_6,
  GROUP_7,
  //GROUP_8
]