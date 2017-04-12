import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'
import { View as AniView } from 'react-native-animatable'

import {
  getRandomSamplesArray,
  getRandomSampleFromGroup,
  countSilence
} from './samples'

import RocketButton from './components/RocketButton'

export default class MainView extends Component {

  constructor (props) {
    super(props)
    setTimeout(() => this.setState({isEnabled: true}), 4000)
  }

  state = {
    playing: false,
    volume: 0.5,
    currentSamples: [],
    isEnabled: false
  }

  playSound = () => {
    const {currentSamples, playing} = this.state

    // stop all samples
    currentSamples.length && currentSamples.map(sample => sample.stop())
    // make sum beatz
    const newSamples = getRandomSamplesArray()
    // show whats playing
    console.log(`now playing: ${newSamples.map(sample => sample.filename)}`)

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

    console.log(`there is ${countSilence(currentSamples)} silence samples`)

    const onEnd = (success) => {
      const loops = Math.round(Math.random() * 2) // 0...3

      let nextSample = getRandomSampleFromGroup(groupIndex)
      nextSample.setLoops(loops)
      currentSamples[groupIndex] = nextSample

      this.setState({currentSamples}, () => {
        console.log(`group: ${groupIndex}, sample changed from ${sample.filename} to ${nextSample.filename}, loops: ${loops + 1}, duration: ${nextSample.duration}`)
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
      fontSize: 12,
      color: 'white',
      textAlign: 'right'
    }

    const viewStyle = {
      width: 300, height: 20
    }

    return currentSamples.map((sample, index) => (<View style={viewStyle} key={index}>
      <Text style={textStyle}>{sample.getStatus()}</Text>
    </View>))
  }

  render () {
    const {isEnabled} = this.state

    return (
      <View style={styles.container}>
        <View style={{padding: 20, paddingTop: 40, paddingLeft: 10, height: 200}}>
          {this.renderSamplesInfo()}
        </View>
        <AniView
          animation="pulse"
          easing="ease-in"
          iterationCount="infinite"
          direction="alternate-reverse"
        >
          <RocketButton onClick={this.toggleSound} enabled={isEnabled}/>
        </AniView>
      </View>)
  }

}
