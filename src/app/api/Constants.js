/* eslint-disable global-require */
import { Dimensions } from 'react-native';

const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: 70,
  VISUAL_BOARD_WIDTH: Math.floor((Dimensions.get('window').width - (2 * 25)) / 25) * 25,
  VISUAL_BOARD_HEIGHT: Math.floor(((Dimensions.get('window').height - 70 - (2 * 25)) / 25)) * 25,
  GRID_WIDTH: Math.floor((Dimensions.get('window').width - (2 * 25)) / 25),
  GRID_HEIGHT: Math.floor(((Dimensions.get('window').height - 70 - (2 * 25)) / 25)),
  GRID_SIZE: 15,
  CELL_SIZE: 25,
};

const SRMapping = {
  low: 1,
  medium: 2,
  high: 3,
};

const SR2Point = {
  low: 'add-500',
  medium: 'add-200',
  high: 'add-100',
};

const assetMapping = {
  skins: {
    alpaca: {
      uri: require('../assets/alpaca.png'),
    },
  },
  goodObjects: [
    {
      name: 'Butterfly',
      type: 'friend',
      uri: require('../assets/butterfly.png'),
      spawnRate: 'medium',
      purchased: true,
      equipped: true,
    },
    {
      name: 'Bee',
      type: 'friend',
      uri: require('../assets/bee.png'),
      spawnRate: 'medium',
    },
    {
      name: 'Sheep',
      type: 'friend',
      uri: require('../assets/sheep.png'),
      spawnRate: 'low',
    },
    {
      name: 'Flower',
      type: 'food',
      uri: require('../assets/flower.png'),
      spawnRate: 'high',
    },
    {
      name: 'Haybale',
      type: 'food',
      uri: require('../assets/haybale.png'),
      spawnRate: 'high',
    },
  ],
  badObjects: [
    {
      name: 'Bear',
      type: 'foe',
      uri: require('../assets/bear.jpg'),
      spawnRate: 'low',
    },
    {
      name: 'wolf',
      type: 'foe',
      uri: require('../assets/wolf.png'),
      spawnRate: 'low',
    },
    {
      name: 'poop',
      type: 'poison',
      uri: require('../assets/poop.png'),
      spawnRate: 'low',
    },
  ],
};

export default Constants;
export { SRMapping, SR2Point, assetMapping };
