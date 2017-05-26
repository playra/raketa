export const formatDuration = (duration) => (duration/1000).toFixed(2) + ' s'

export const getRandomIndex = array => Math.floor(Math.random() * array.length)
export const getRandomValue = array => array[ getRandomIndex(array) ]