import Sample from './Sample'
import { SILENCE_RATIO, SILENCE } from '../constants'
import { getRandomValue } from '../helpers'

export default class SamplesGroup {

  samples = []
  silenceRatio = 0
  nowPlaying = null

  constructor (name, samples, silenceRatio = SILENCE_RATIO) {
    this.samples = samples.map(file => new Sample(file))
    this.name = name
    // todo turn off all volumes instead of silence sample
    this.silence = new Sample(SILENCE)
    this.silenceRatio = silenceRatio
    this.nowPlaying = this.silence
  }

  setSilenceRatio (ratio) {
    this.silenceRatio = Number(ratio)
  }

  next = () => {
    this.nowPlaying.stop()

    // todo crossfade

    const nextSample = getRandomValue(this.samples)

    nextSample.play( this.next )

    this.nowPlaying = nextSample
  }

  mute () {
    this.samples.map( sample => sample.stop() )
  }

  getStatus() {
    const { samples, nowPlaying, silenceRatio} = this
    return `${this.name}: ${silenceRatio*100}% silence, ${samples.length} samples \n ${nowPlaying.getStatus()}`
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