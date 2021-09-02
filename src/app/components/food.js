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
  info,
}) {
  const x = position[0];
  const y = position[1];

  return (
    <View style={[styles.finger]}>
      <Image
        source={info.uri}
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
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uri: PropTypes.number.isRequired,
    spawnRate: PropTypes.string.isRequired,
  }).isRequired,
};
