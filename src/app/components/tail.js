/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../api/Constants';

export default function Tail({
  elements,
  size,
}) {
  const tailList = elements.map((el, idx) => (
    <Image
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
      source={require('../assets/alpaca.png')}
      style={{
        width: size,
        height: size,
        position: 'absolute',
        left: el[0] * size,
        top: el[1] * size,
      }}
    />
  ));

  return (
    <View style={{ width: Constants.GRID_WIDTH * size, height: Constants.GRID_HEIGHT * size }}>
      {tailList}
    </View>
  );
}

Tail.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.any).isRequired,
  size: PropTypes.number.isRequired,
};
