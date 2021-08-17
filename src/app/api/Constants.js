/* eslint-disable global-require */
import { Dimensions } from 'react-native';

const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: 70,
  VISUAL_WIDTH: Math.floor((Dimensions.get('window').width - (2 * 25)) / 25) * 25,
  VISUAL_HEIGHT: Math.floor(((Dimensions.get('window').height - 70 - (2 * 25)) / 25)) * 25,
  GRID_WIDTH: Math.floor((Dimensions.get('window').width - (2 * 25)) / 25),
  GRID_HEIGHT: Math.floor(((Dimensions.get('window').height - 70 - (2 * 25)) / 25)),
  GRID_SIZE: 15,
  CELL_SIZE: 25,
};

const assetMapping = {
  skins: {
    alpaca: {
      uri: "require('alpaca.png')",
    },
  },
  objects: [
    {
      name: 'butterfly',
      uri: require('../assets/butterfly.png'),
      points: 10,
    },
    {
      name: 'flower',
      uri: require('../assets/flower.png'),
      points: 5,
    },
  ],
};

export default Constants;
export { assetMapping };
