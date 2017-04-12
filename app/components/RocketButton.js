import React, { Component } from 'react'
import {
  TouchableOpacity,
} from 'react-native'

import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../../ios/fontello/config.json'
import styles from '../styles'

const Icon = createIconSetFromFontello(fontelloConfig)

const Button = ({onClick, enabled = false}) => (
  <TouchableOpacity
    style={styles.play}
    onPress={enabled ? onClick : () => {}}
  >
    <Icon
      name="play"
      size={120}
      color={enabled ? "#EF2B47" : "#CCCCCC"}
    />
  </TouchableOpacity>)

export default Button