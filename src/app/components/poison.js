/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  finger: {
    position: 'absolute',
  },
});

export default function Poison({
  positions,
  size,
  info,
}) {
  /* const x = position[0];
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
  */

  const poisonList = positions.map((el, idx) => (
    <Image
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
      source={info[idx].uri}
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
    <View style={[styles.finger]}>
      {poisonList}
    </View>
  );
}

Poison.propTypes = {
  // position: PropTypes.arrayOf(PropTypes.number).isRequired,
  positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  size: PropTypes.number.isRequired,
  info: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uri: PropTypes.number.isRequired,
    spawnRate: PropTypes.string.isRequired,
  })).isRequired,
};
