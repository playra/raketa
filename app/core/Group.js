import Sample from './Sample'
import { SILENCE_RATIO, SILENCE, LOOPS_DEFAULT } from '../constants'
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
  }

  setSilenceRatio (ratio) {
    this.silenceRatio = Number(ratio)
  }

  next = () => {

    const { nowPlaying, silenceRatio, samples } = this

    if ( nowPlaying ) {
      nowPlaying.stop()
    }

    // todo crossfade
    const nextSample = Math.random() > silenceRatio ? getRandomValue(samples) : this.silence
    const loops = LOOPS_DEFAULT

    nextSample.setLoops(loops)

    nextSample.play( this.next )

    this.nowPlaying = nextSample
  }

  mute () {
    this.samples.map( sample => sample.stop() )
    this.nowPlaying = null
  }

  getStatus() {
    const { samples, nowPlaying, silenceRatio} = this
    return`${this.name}: ${silenceRatio*100}% silence, ${samples.length} samples \n${nowPlaying !== null ? nowPlaying.getStatus() : '⏹'}`
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