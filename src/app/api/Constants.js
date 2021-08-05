import { Dimensions } from 'react-native';

const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: 70,
  GRID_WIDTH: Dimensions.get('window').width / 20,
  GRID_HEIGHT: (Dimensions.get('window').height - 70) / 20,
  GRID_SIZE: 15,
  CELL_SIZE: 20,
};

export default Constants;
