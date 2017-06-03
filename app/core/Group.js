import Sample from './Sample'
import { SILENCE_RATIO, SILENCE, LOOPS_DEFAULT } from '../constants'
import { getRandomValue } from '../helpers'

export const ORDER_SHUFFLE = 'ORDER_SHUFFLE'
export const ORDER_QUEUE = 'ORDER_QUEUE'

export default class SamplesGroup {

  samples = []
  silenceRatio = 0
  nowPlaying = null

  constructor (name, samples, silenceRatio = SILENCE_RATIO, order = ORDER_SHUFFLE) {
    this.samples = samples.map(file => file.length ? new Sample(file) : file)
    this.name = name
    // todo turn off all volumes instead of silence sample
    this.silence = new Sample(SILENCE)
    this.order = order
    this.silenceRatio = silenceRatio
  }

  setSilenceRatio (ratio) {
    this.silenceRatio = Number(ratio)
  }

  next = () => {

    const {nowPlaying, silenceRatio, samples, order} = this
    let nextSample = this.silence
    let currentSampleIndex = 0

    if (nowPlaying) {
      nowPlaying.stop()
      currentSampleIndex = samples.indexOf(nowPlaying)
    }

    // todo crossfade

    if (order === ORDER_SHUFFLE) {
      if (Math.random() > silenceRatio) {
        nextSample = getRandomValue(samples)
        nextSample.setLoops(LOOPS_DEFAULT)
      }
    } else if (order === ORDER_QUEUE) {
      if (nowPlaying) {
        if (currentSampleIndex < samples.length - 1) {
          currentSampleIndex++
        } else {
          currentSampleIndex = 0
        }
      }

      nextSample = samples[currentSampleIndex]
      console.log(`${this.name} group, QUEUE order, nowplaying ${nowPlaying ? nowPlaying.filename : 'none'}, next is ${nextSample.filename}`)
    }

    nextSample.play(this.next)

    this.nowPlaying = nextSample
  }

  mute () {
    this.samples.map(sample => sample.stop())
    this.nowPlaying = null
  }

  getStatus () {
    const {samples, nowPlaying, silenceRatio, order} = this
    return `${this.name}: ${silenceRatio * 100}% silence, ${samples.length} samples, ${order === ORDER_SHUFFLE ? '🔀' : '🔁'} \n${nowPlaying !== null ? nowPlaying.getStatus() : '⏹'}`
  }

  getRandomSample () {

    const {samples, silenceRatio, silence} = this

    if (samples.length === 1) {
      return samples[0]
    } else {
      if (Math.random() <= silenceRatio) {
        return silence
      } else {
        return getRandomValue(samples)
      }
    }
  }

}