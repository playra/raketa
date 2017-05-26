import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'
import { View as AniView } from 'react-native-animatable'

import GROUPS,
{
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
    groups: GROUPS,
    isEnabled: false
  }

  playSound = () => {
    const {groups} = this.state

    groups.map(group => group.next())

    this.setState({playing: true})
  }

  stopSound = () => {
    const {groups} = this.state

    // stop all sounds
    groups.map(group => group.mute())

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

  renderSamplesInfo () {
    const {groups} = this.state

    const textStyle = {
      fontSize: 12,
      color: 'white',
      textAlign: 'left'
    }

    const viewStyle = {
      width: 300, height: 35
    }

    return groups.map( (group, index) => (<View style={viewStyle} key={index}>
      <Text style={textStyle}>{group.getStatus()}</Text>
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
