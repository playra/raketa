import Sound from 'react-native-sound'
import {
  DEFAULT_VOLUME,
  FADE_DURATION,
  FADE_STEP_DELAY
} from '../constants'

import {
  formatDuration
} from '../helpers'

Sound.enableInSilenceMode(true)

// todo math for duration/loops factor
export default class Sample {

  constructor (file, loops = 0) {
    this.filename = file
    this.sound = new Sound(file, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log(`failed to load sample: ${file}`)
        return
      }

      const sampleDuration = this.sound.getDuration()
      this.duration = Math.round(sampleDuration * 1000)
      this.sound.setNumberOfLoops(-1)
      this.sound.setVolume(0)
      this.sound.play(() => {})
    })

    this.loops = loops
    this.timesPlayed = 0
    this.timeout = null
  }

  fadeIn () {

    const volume = this.sound.getVolume()
    const steps = Math.round(FADE_DURATION / FADE_STEP_DELAY)
    console.log(`fading to volume = 1 with ${steps} steps`)

    // todo easing
    for (let i = 1; i <= steps; i++) {
      const newVolume = (1 / steps) * i
      const timeout = i * FADE_STEP_DELAY
      setTimeout(() => this.sound.setVolume(newVolume), timeout)
    }
  }

  fadeOut () {
    const volume = this.sound.getVolume()

    const steps = Math.round(FADE_DURATION / FADE_STEP_DELAY)
    console.log(`fading to volume = 0 with ${steps} steps`)

    // todo easing
    for (let i = 1; i <= steps; i++) {
      const newVolume = 1 - (1 / steps) * i
      const timeout = i * FADE_STEP_DELAY
      setTimeout(() => this.sound.setVolume(newVolume), timeout)
    }
  }

  play (onEnd) {

    if (this.sound.getVolume() === 0) {
      this.fadeIn()
    }

    this.sound.setCurrentTime(0)

    const callback = () => {
      this.timesPlayed++

      if (this.timesPlayed == this.loops + 1) {
        console.log('sample onEnd callback')
        this.stop()
        // change sample
        onEnd()
      } else {
        console.log(`${this.filename} played ${this.timesPlayed} times, need ${this.loops - this.timesPlayed + 1} more`)
        this.play(callback)
      }
    }

    this.timeout = setTimeout(callback, this.duration)
  }

  getStatus () {
    const {filename, duration = 0, loops = 0} = this
    return `${filename}:  ${loops + 1} times left (${formatDuration(duration)})`
  }

  stop () {
    console.log('sample stop')

    clearTimeout(this.timeout)

    if ( this.sound.getVolume() > 0 ) {
      this.fadeOut()
    }

    this.timesPlayed = 0
    this.loops = 0
  }

  setLoops (loops) {
    this.loops = loops
  }

}