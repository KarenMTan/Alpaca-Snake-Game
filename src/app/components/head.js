/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  finger: {
    position: 'absolute',
  },
});

export default function Head({
  position,
  size,
}) {
  const x = position[0];
  const y = position[1];
  return (
    <View style={[styles.finger]}>
      <Image
        source={require('../assets/alpaca.png')}
        style={[{
          width: size, height: size, left: x * size, top: y * size,
        }]}
      />
    </View>
  );
}

Head.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.number.isRequired,
};
