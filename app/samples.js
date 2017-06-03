import {
  SILENCE
} from './constants'

import SamplesGroup, { ORDER_QUEUE, ORDER_SHUFFLE } from './core/Group'
import Sample from './core/Sample'

/**
 * DRUMS GROUP
 */
const S5_AFTERBEATISILENCE_16BEATS = 'S5_AFTERBEATISILENCE_16BEATS.m4a'
const S5_BDBASS_16BEATS = 'S5_BDBASS_16BEATS.m4a'
const S5_FILLBEAT_32BEATS = 'S5_FILLBEAT_32BEATS.m4a'
const S5_MAINBEAT_16BEATS = 'S5_MAINBEAT_16BEATS.m4a'

const SMART_BEATS = new SamplesGroup('SMART BEATS', [
  new Sample(S5_AFTERBEATISILENCE_16BEATS, 1),
  new Sample(SILENCE, 2),
  new Sample(S5_FILLBEAT_32BEATS, 1)
], 0, ORDER_QUEUE)

const DRUMS = new SamplesGroup('DRUMS',
  [
    S5_AFTERBEATISILENCE_16BEATS,
    S5_BDBASS_16BEATS,
    S5_FILLBEAT_32BEATS,
    S5_MAINBEAT_16BEATS
  ])

/**
 * BASS GROUP
 */
const S5_BASS1_16BEATS = 'S5_BASS1_16BEATS.m4a'
const S5_BASS2_32BEATS = 'S5_BASS2_32BEATS.m4a'
const S5_BASS3_16BEATS = 'S5_BASS3_16BEATS.m4a'
const BASS = new SamplesGroup('BASS',
  [
    S5_BASS1_16BEATS,
    S5_BASS2_32BEATS,
    S5_BASS3_16BEATS
  ], .12)

/**
 * HIGH HATS GROUP
 */
const S5_HATS1_16BEATS = 'S5_HATS1_16BEATS.m4a'
const S5_HATS2_16BEATS = 'S5_HATS2_16BEATS.m4a'
const HATS = new SamplesGroup('HATS',
  [
    S5_HATS1_16BEATS,
    S5_HATS2_16BEATS
  ], .12)

/**
 * CHORDS GROUP
 */
const S5_CHORDS1_32BEATS = 'S5_CHORDS1_32BEATS.m4a'
const S5_CHORDS3_32BEATS = 'S5_CHORDS3_32BEATS.m4a'
const S5_CHORDS_32BEATS = 'S5_CHORDS_32BEATS.m4a'

const CHORDS = new SamplesGroup(
  'CHORDS',
  [
    S5_CHORDS1_32BEATS,
    S5_CHORDS3_32BEATS,
    S5_CHORDS_32BEATS
  ])

const S5_SYNTH1_16BEATS = 'S5_SYNTH1_16BEATS.m4a'
const S5_SYNTH2_32BEATS = 'S5_SYNTH2_32BEATS.m4a'

const SYNTH = new SamplesGroup('SYNTH',
  [
    S5_SYNTH1_16BEATS, // Synth1 15%
    S5_SYNTH2_32BEATS  // Synth2 25%
  ], .15)

/**
 * PERCUSSION GROUP
 */
const S5_PERC1_16BEATS = 'S5_PERC1_16BEATS.m4a'

const PERC = new SamplesGroup('PERC',
  [
    S5_PERC1_16BEATS
  ], .3)

/**
 * FX GROUP
 */
const S5_FX_32BEATS = 'S5_FX_32BEATS.m4a'
const FX = new SamplesGroup('FX',
  [
    S5_FX_32BEATS
  ], .7)

/**
 * VOX GROUP
 */
const S5_VOX1_32BEATS = 'S5_VOX1_32BEATS.m4a'
const S5_VOX2_16BEATS = 'S5_VOX2_16BEATS.m4a'
const VOX = new SamplesGroup('VOX',
  [
    S5_VOX1_32BEATS,
    S5_VOX2_16BEATS
  ], .9)

// todo LOOP GAP PER GROUP
const GROUPS = [

  DRUMS,
  SMART_BEATS,
  BASS,
//  HATS,
  CHORDS,
  SYNTH,
  PERC,
  FX,

  // SILENCE_GROUP
  // METRONOME_GROUP

  VOX
]

export const countSilence = samples => samples.reduce((count, sample) => count + (sample.filename === SILENCE ? 1 : 0), 0)
export const getRandomSamplesArray = () => GROUPS.map(group => group.getRandomSample())

export default GROUPS
