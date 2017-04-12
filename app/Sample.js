import Sound from 'react-native-sound'
import { DEFAULT_VOLUME, METRONOME } from './constants'

export default class Sample {

  constructor (file, loops = 0) {

    this.file = file

    this.sound = new Sound(file, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log(`failed to load sample: ${file}`)
        return
      }

      this.duration = Math.round(this.sound.getDuration() * 1000)
      this.sound.setNumberOfLoops(-1)
      this.sound.setVolume(0)
      this.sound.play(() => {})
    })


    this.loops = loops
    this.timesPlayed = 0
  }

  play (onEnd, gap = 0 /* start time in ms */) {
    const startTime = Date.now()
    this.sound.setVolume(DEFAULT_VOLUME)

    function callback() {
      const volume = this.sound.getVolume()
      if ( volume === 0 ) return

      this.timesPlayed++

      if (this.timesPlayed == this.loops + 1) {
        console.log('sample onEnd callback')
        this.stop()
        // change sample
        onEnd()
      } else {
        console.log(`${this.file} played ${this.timesPlayed} times, need ${this.loops - this.timesPlayed + 1} more`)

        const endTime = Date.now()
        console.log( `gap between is ${endTime - startTime}`)
        this.play(callback)
      }
    }

    setTimeout( callback.bind(this), this.duration )
  }

  stop () {
    console.log('sample stop')

    this.sound.setVolume(0)
    this.timesPlayed = 0
    this.loops = 0
  }

  setLoops (loops) {
    this.loops = loops
  }

}