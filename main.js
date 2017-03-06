'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import * as Animatable from 'react-native-animatable';

//import Slider from 'react-native-slider';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './ios/fontello/config.json';

const Icon = createIconSetFromFontello(fontelloConfig);

const S = Sound.MAIN_BUNDLE;

// test loop
const TABLA = new Sound('TABLA.wav', S);
const SILENCE = new Sound('silence.aif', S);

// G1
const S1_CRASH_FILL_BD_SN = new Sound('S1_CRASH_FILL_BD_SN.wav', S);
const S1_MAIN_BD_SN = new Sound('S1_Main_BD_SN.wav', S);
const S1_MAIN_BD = new Sound('S1_Main_BD.wav', S);
const S2_BD_BASS_SN = new Sound('S2_BD_BASS_SN.wav', S);
const S2_BD_BASS = new Sound('S2_BD_BASS.wav', S);
const S2_CRASH_FILL_BD_B_SN = new Sound('S2_CRASH_FILL_BD_B_SN.wav', S);
const S3_BD_BASS_SN = new Sound('S3_BD_BASS_SN.wav', S);
const S3_BD_BASS = new Sound('S3_BD_BASS.wav', S);
const S3_CRASH_FILL_BDBSN = new Sound('S3_CRASH_FILL_BDBSN.wav', S);
const S4_BD_SUB_BD_SN = new Sound('S4_BD_Sub_BD+SN.wav', S);
const S4_BD_SUB_BD = new Sound('S4_BD_Sub_BD.wav', S);
const S4_CRASH_FILL_BDSN = new Sound('S4_CRASH_FILL_BDSN.wav', S);

//G2
const S1_MIN_HATS = new Sound('S1_Min_Hats.wav', S);
const S2_HATS_CLICKS = new Sound('S2_HATS+CLICKS.wav', S);
const S3_HATS = new Sound('S3_HATS.wav', S);
const S4_HATS_PERCS = new Sound('S4_HATS_PERCS.wav', S);

//G3
const LONG_BASS_SOLO = new Sound('Long_BASS_SOLO.wav', S);
const S1_BASS1 = new Sound('S1_BASS1.wav', S);
const S1_BASS2 = new Sound('S1_BASS2.wav', S);
const S1_BASS3 = new Sound('S1_BASS3.wav', S);
const S2_BASS_2 = new Sound('S2_BASS_2.wav', S);
const S3_BASS_2 = new Sound('S3_BASS_2.wav', S);
const S3_BASS1 = new Sound('S3_BASS1.wav', S);
const S4_BASS1 = new Sound('S4_BASS1.wav', S);
const S4_SYNTH_BASS = new Sound('S4_SYNTH_BASS.wav', S);

//G4
const S1_CHORDS = new Sound('S1_Chords.wav', S);
const S1_EGT = new Sound('S1_ElectroGT_16bSolo.wav', S);
const S1_PAD = new Sound('S1_PAD.wav', S);
const S2_ARP = new Sound('S2_ARP.wav', S);
const S3_CHORDS = new Sound('S3_CHORDS.wav', S);
const S4_CHORDS = new Sound('S4_CHORDS.wav', S);
const S4_SUB_CHORD = new Sound('S4_Sub_CHORD.wav', S);

//G5
const S1_CHORDS_G5 = new Sound('S1_ChordsG5.wav', S);
const S1_PADG5 = new Sound('S1_PAD.wav', S);
const S2_PADG5 = new Sound('S2_PADG5.wav', S);
const S3_PAD_THEME = new Sound('S3_PAD_THEME.wav', S);
const S4_PAD = new Sound('S4_PAD.wav', S);
const S4_SHORT_PAD = new Sound('S4_SHORT_PAD.wav', S);
const S_E_GT_S = new Sound('S_ElectroGT_Solo.wav', S);

//G6
const KVOX_L_D = new Sound('KVOXfly_long_delay.wav', S);
const S6_VOX = new Sound('S6_VOX.wav', S);
const S2_VOCODERVOICE = new Sound('S2_VOCODERVOICE.wav', S);
const S4_VOCODER_VOICE = new Sound('S4_VOCODER_VOICE.wav', S);
const VOX_N = new Sound('Vox_normal.wav', S);
const VOX_S = new Sound('Vox_stabil.wav', S);
const VOXFLY_L_D = new Sound('VOXfly_long_delay.wav', S);

//G7
const S1_FX = new Sound('S1_FX.wav', S);
const S1_N_A = new Sound('S1_NoiseArp.wav', S);
const S2_FX = new Sound('S2_FX.wav', S);
const S3_FX = new Sound('S3_FX.wav', S);
const S3_PERCUSSION = new Sound('S3_PERCUSSION.wav', S);
const S7_FX = new Sound('S7_FX.wav', S);
const S_I_FX = new Sound('S_IvanFX.wav', S);

//G8
const LOOP_D_H = new Sound('LOOP_Dist_Highpass.wav', S);
const LOOP_M_B_D = new Sound('LOOP_Main_Beat_Dist.wav', S);
const S1_LF_D = new Sound('S1_LoFi_Dr.wav', S);
const S2_DRUMS_LOOP = new Sound('S2_DRUMS_LOOP.wav', S);
const S3_DRUM_LOOP = new Sound('S3_DRUM_LOOP.wav', S);
const S4_DRUM_LOOP = new Sound('S4_DRUM_LOOP.wav', S);
const S4_LOOP_DIST_BEAT = new Sound('S4_LOOP_DIST_BEAT.wav', S);
const SUB_HATS = new Sound('Sub_HATS.wav', S);

const G1 = [
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
  SILENCE,
  S4_BD_SUB_BD,
  S4_CRASH_FILL_BDSN,
];

const G2 = [
  S1_MIN_HATS,
  SILENCE,
  S2_HATS_CLICKS,
  S3_HATS,
  SILENCE,
  S4_HATS_PERCS,
];

const G3 = [
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
];

const G4 = [
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
];

const G5 = [
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
];

const G6 = [
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
];

const G7 = [
  S1_FX,
  S1_N_A,
  S2_FX,
  S3_FX,
  SILENCE,
  S3_PERCUSSION,
  S7_FX,
  SILENCE,
  S_I_FX,
];

const G8 = [
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
];

// const TAB = [
//   TABLA,
//   TABLA,
// ];

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.state = {
      playStatus: false,
      vol: 0.5,
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps()');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }

  componentWillUpdate() {
    G1.forEach(p => p.stop());
    G2.forEach(p => p.stop());
    G3.forEach(p => p.stop());
    G4.forEach(p => p.stop());
    G5.forEach(p => p.stop());
    G6.forEach(p => p.stop());
    G7.forEach(p => p.stop());
    G8.forEach(p => p.stop());
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  playSound() {
    this.state = {
      vol: 0.9,
      groups: [
        { group: G1[Math.floor(Math.random() * G1.length)] },
        { group: G2[Math.floor(Math.random() * G2.length)] },
        { group: G3[Math.floor(Math.random() * G3.length)] },
        { group: G4[Math.floor(Math.random() * G4.length)] },
        { group: G5[Math.floor(Math.random() * G5.length)] },
        { group: G6[Math.floor(Math.random() * G6.length)] },
        { group: G7[Math.floor(Math.random() * G7.length)] },
        // { group: TAB[Math.floor(Math.random() * TAB.length)] },

        //{ group: G8[Math.floor(Math.random() * G8.length)] },
      ],
    };
    this.setState({
      playStatus: true,
    }, () => {
      //console.log(`playsound Callback ${console.time()}`)
      this.state.groups.forEach(p => p.group.play(() => this.playSound()));
    });
  }

  stopSound() {
    this.setState({
        playStatus: false,
      }, () => {
        G1.forEach(p => p.stop());
        G2.forEach(p => p.stop());
        G3.forEach(p => p.stop());
        G4.forEach(p => p.stop());
        G5.forEach(p => p.stop());
        G6.forEach(p => p.stop());
        G7.forEach(p => p.stop());
        G8.forEach(p => p.stop());
      });
  }

  render() {
    return (
            <Animatable.View
              animation="pulse"
              easing="ease-in"
              iterationCount="infinite"
              direction="alternate-reverse"
              style={styles.container}
            >
              <TouchableOpacity
                style={styles.play}
                onPress={() => {
                  if (!this.state.playStatus) {
                    this.playSound();
                  } else {
                    this.stopSound();
                  }
                }}
              >
                <Icon
                  name={!this.state.playStatus ? 'play' : 'play'}
                  size={120}
                  color="#EF2B47"
                />
                </TouchableOpacity>
            </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2c2c39',
  },
  play: {
    flexDirection: 'column',
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fader: {
    margin: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});
