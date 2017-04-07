import React, { Component } from 'react'
import {
  TouchableOpacity,
} from 'react-native'

import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../../ios/fontello/config.json'
import styles from '../styles'

const Icon = createIconSetFromFontello(fontelloConfig)

const Button = ({onClick}) => (
  <TouchableOpacity
    style={styles.play}
    onPress={onClick}
  >
    <Icon
      name="play"
      size={120}
      color="#EF2B47"
    />
  </TouchableOpacity>)

export default Button