import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';

import styles from './styles';

import * as Animatable from 'react-native-animatable';
import SAMPLE_GROUPS from './samples';

import { createIconSetFromFontello } from 'react-native-vector-icons';

import fontelloConfig from '../ios/fontello/config.json';

const Icon = createIconSetFromFontello(fontelloConfig);

const getRandomSample = group => group[Math.floor(Math.random() * group.length)];

export default class MainView extends Component {

  state = {
    playing: false,
    volume: 0.5,
    currentSamples: SAMPLE_GROUPS.map(getRandomSample)
  };

  playSound = () => {
    // stop all samples
    const { currentSamples } = this.state;
    currentSamples.map(sample => sample.stop().release());

    // make sum beatz
    const newSamples = SAMPLE_GROUPS.map(getRandomSample);
    newSamples.map(sample => sample.play());

    // show whats playing
    console.log(`now playing: ${newSamples.map(sample => sample._key)}`);

    this.setState({
      playing: true,
      currentSamples: newSamples
    });
  }

  stopSound = () => {
    const { currentSamples } = this.state;
    // stop all sounds
    currentSamples.map(sample => sample.stop().release());
    console.log('stop looping');

    this.setState({ playing: false });
  }

  toggleSound = () => {
    const { playing } = this.state;
    if (playing) {
      this.stopSound();
    } else {
      this.playSound();
    }
  }

  render() {
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
    );
  }

}
