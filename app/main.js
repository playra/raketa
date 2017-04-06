import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'

import styles from './styles'

import * as Animatable from 'react-native-animatable'
import {
  getRandomSamplesArray,
  getRandomSampleFromGroup,
  getSilenceSample,
  SILENCE,
  SILENCE_GAP,
  countSilence
} from './samples'

import { createIconSetFromFontello } from 'react-native-vector-icons'

import fontelloConfig from '../ios/fontello/config.json'

const Icon = createIconSetFromFontello(fontelloConfig)

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
      sample.stop()
      const loops = Math.round(Math.random() * 2) // 0...3

      let nextSample = getRandomSampleFromGroup(groupIndex)
      nextSample.setLoops(loops)

      if (silenceCount < SILENCE_GAP) {
        console.log(`need ${SILENCE_GAP - silenceCount} more silence samples`)
        nextSample = getSilenceSample()
        //silence.play(() => this.playSample(nextSample, groupIndex))
      }

      if (silenceCount > SILENCE_GAP) {
        console.log(`there is more silences(${silenceCount}) then needed (${SILENCE_GAP})`)
      }

      currentSamples[groupIndex] = nextSample

      this.setState({currentSamples}, () => {
        console.log(`group: ${groupIndex}, sample changed from ${sample.file} to ${nextSample.file}, loops: ${loops + 1}, duration: ${nextSample.duration}`)
      })

      this.playSample(nextSample, groupIndex)
    }

    if (silenceCount < SILENCE_GAP) {
      const currentSample = getSilenceSample()
      currentSamples[groupIndex] = currentSample
      currentSample.play(onEnd)
      this.setState({currentSamples})
    } else {
      sample.play(onEnd)
    }
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
      fontSize: 14, color: 'white'
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

      <Animatable.View
        animation="pulse"
        easing="ease-in"
        iterationCount="infinite"
        direction="alternate-reverse"
        style={styles.container}
      >
        <View style={{padding: 40, height: 200}}>
          {this.renderSamplesInfo()}
        </View>
        <TouchableOpacity
          style={styles.play}
          onPress={this.toggleSound}
        >
          <Icon
            name="play"
            size={120}
            color="#EF2B47"
          />
        </TouchableOpacity>
      </Animatable.View>
    )
  }

}
