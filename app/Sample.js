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

      this.duration = this.sound.getDuration()
      if ( file === METRONOME ) {
        this.sound.setVolume(1)
        this.loops = 999
      } else {
        this.sound.setVolume(DEFAULT_VOLUME)
      }
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
        console.log('sample onEnd callback')
        this.stop()
        onEnd()
      } else {
        console.log(`${this.file} played ${this.timesPlayed} times, need ${this.loops - this.timesPlayed + 1} more`)
        // this.sound.stop().release()
        this.sound.play(callback)
      }
    }

    //this.sound.setCurrentTime(gap / 1000) // set playgap
    this.sound.play(callback)
  }

  stop () {
    console.log('sample stop')
    this.sound.stop()
    this.timesPlayed = 0
    this.loops = 0
  }

  setLoops (loops) {
    this.loops = loops
  }

}