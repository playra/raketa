import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'

import styles from './styles'
import * as Animatable from 'react-native-animatable'

import {
  SILENCE_RATIO,
  SILENCE_GAP
} from './constants'

import {
  getRandomSamplesArray,
  getRandomSampleFromGroup,
  getSilenceSample,
  countSilence,
  METRONOME_SAMPLE
} from './samples'

import RocketButton from './components/RocketButton'


/*const pingMetronome = () => METRONOME_SAMPLE.play(()=>{
  console.log( 'play metronome sound')
  METRONOME_SAMPLE.stop()
  setTimeout(pingMetronome, 272)
})

setTimeout(
  () => {
    pingMetronome()
  }, 1500)*/


export default class MainView extends Component {

  state = {
    playing: false,
    volume: 0.5,
    currentSamples: []
  }

  playSound = () => {
    const {currentSamples, playing} = this.state

    // stop all samples
    currentSamples.length && currentSamples.map(sample => sample.stop())
    // make sum beatz
    const newSamples = getRandomSamplesArray()
    // show whats playing
    console.log(`now playing: ${newSamples.map(sample => sample.file)}`)

    this.setState(
      {
        playing: true,
        currentSamples: newSamples
      },
      () => newSamples.map((sample, groupIndex) => this.playSample(sample, groupIndex))
    )
  }

  // todo rewrite with generators in groups
  playSample (sample, groupIndex) {
    let {currentSamples} = this.state
    const silenceCount = countSilence(currentSamples)
    console.log(`there is ${silenceCount} silence samples`)

    const onEnd = (success) => {
      const loops = Math.round(Math.random() * 2) // 0...3

      let nextSample = getRandomSampleFromGroup(groupIndex)
      nextSample.setLoops(loops)
      currentSamples[groupIndex] = nextSample

      this.setState({currentSamples}, () => {
        console.log(`group: ${groupIndex}, sample changed from ${sample.file} to ${nextSample.file}, loops: ${loops + 1}, duration: ${nextSample.duration}`)
      })

      this.playSample(nextSample, groupIndex)
    }

    sample.play(onEnd)
  }

  stopSound = () => {
    const {currentSamples} = this.state

    // stop all sounds
    currentSamples.map(sample => sample.stop())
    console.log('stop looping')

    this.setState({playing: false, currentSamples: []})
  }

  toggleSound = () => {
    const {playing} = this.state
    if (playing) {
      this.stopSound()
    } else {
      this.playSound()
    }
  }

  renderSamplesInfo () {
    const {currentSamples} = this.state

    const textStyle = {
      fontSize: 12, color: 'white', paddingLeft: 5
    }

    const viewStyle = {
      width: 500, height: 20
    }

    return currentSamples.map((sample, index) => {
      const {file, duration = 0, loops = 0} = sample

      return <View style={viewStyle} key={index}>
        <Text style={textStyle}>{file}, dur: {duration.toFixed(4)}, loops: {loops}</Text>
      </View>
    })
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={{padding: 40, height: 200}}>
          {this.renderSamplesInfo()}
        </View>
        <Animatable.View
          animation="pulse"
          easing="ease-in"
          iterationCount="infinite"
          direction="alternate-reverse"
        >
          <RocketButton onClick={this.toggleSound}/>
        </Animatable.View>
      </View>)
  }

}
