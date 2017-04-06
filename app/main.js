import React, { Component } from 'react'
import {
  TouchableOpacity
} from 'react-native'

import styles from './styles'

import * as Animatable from 'react-native-animatable'
import SAMPLE_GROUPS, { getSamplesGroup, getSample } from './samples'

import { createIconSetFromFontello } from 'react-native-vector-icons'

import fontelloConfig from '../ios/fontello/config.json'

const Icon = createIconSetFromFontello(fontelloConfig)

const getRandomSample = group => group[Math.floor(Math.random() * group.length)]
const stopSample = sample => sample.stop().release()

function playSample (sample, groupIndex) {

  let timer = Date.now()

  const onStop = (success) => {

    // todo clone sample before play

    stopSample(sample)

    if (success) {

    }

    const currentGroup = getSamplesGroup(groupIndex)
    const nextSample = getSample(getRandomSample(currentGroup))

    console.log(`group: ${groupIndex}, sample changed from ${sample._key} to ${nextSample._key}`)

    console.time('loop stops')
    playSample(nextSample, groupIndex)
  }

  setTimeout(()=>{
    console.log( 'sample', sample, `loaded is ${sample._loaded}`)
    sample.play(onStop)
    console.log( ` sample changed after ${Date.now() - timer} ms`)
  }, 100)
}

const startSamples = (SAMPLE_GROUPS.map(getRandomSample)).map(getSample)

export default class MainView extends Component {

  state = {
    playing: false,
    volume: 0.5,
    currentSamples: startSamples
  }

  playSound = () => {
    // stop all samples
    const {currentSamples, playing} = this.state
    currentSamples.map(stopSample)

    // make sum beatz
    const newSamples = (SAMPLE_GROUPS.map(getRandomSample)).map(getSample)
    // show whats playing
    console.log(`now playing: ${newSamples.map(sample => sample._key)}`)

    global.SAMPLES = newSamples

    this.setState({
      playing: true,
      currentSamples: newSamples
    })

    newSamples.map((sample, groupIndex) => playSample(sample, groupIndex))
  }

  stopSound = () => {
    const {currentSamples} = this.state
    // stop all sounds
    currentSamples.map(stopSample)
    console.log('stop looping')

    this.setState({playing: false})
  }

  toggleSound = () => {
    const {playing} = this.state
    if (playing) {
      this.stopSound()
    } else {
      this.playSound()
    }
  }

  render () {
    // todo move btn to

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
