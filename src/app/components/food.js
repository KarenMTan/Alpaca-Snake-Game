/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  finger: {
    position: 'absolute',
  },
});

export default function Food({
  position,
  size,
  assetSource,
}) {
  const x = position[0];
  const y = position[1];

  /**
   * So this component should be able to draw from several different things (Constant.js) depending
   * the spawn chance. Moreover, the tail should somehow be able to read the type of the food (in
   * order to append that asset).
   */

  return (
    <View style={[styles.finger]}>
      <Image
        source={assetSource}
        style={[{
          width: size, height: size, left: x * size, top: y * size,
        }]}
      />
    </View>
  );
}

Food.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.number.isRequired,
  assetSource: PropTypes.number.isRequired,
};
