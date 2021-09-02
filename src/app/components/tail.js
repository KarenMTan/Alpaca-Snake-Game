/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../api/Constants';

/**
 *
 * @param {array} positions - An array of each tail element's position.
 * @param {number} size - The size of the element
 * @param {array} assetSources - An array of each tail element's assetSource.
 * @returns
 */
export default function Tail({
  positions,
  size,
  assetSources,
}) {
  const tailList = positions.map((el, idx) => (
    <Image
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
      source={assetSources[idx]}
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
  positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  size: PropTypes.number.isRequired,
  assetSources: PropTypes.arrayOf(PropTypes.number).isRequired,
};
