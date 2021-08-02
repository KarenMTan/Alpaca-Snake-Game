import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  finger: {
    backgroundColor: '#888888',
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
    <View style={[styles.finger, {
      width: size, height: size, left: x * size, top: y * size,
    }]}
    />
  );
}

Head.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.number.isRequired,
};
