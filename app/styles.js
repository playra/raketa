import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2c2c39',
  },
  play: {
    flexDirection: 'column',
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fader: {
    margin: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
})
