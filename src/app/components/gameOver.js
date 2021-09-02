import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';

export default function GameOver({
  isVisible,
  onPress,
}) {
  return (
    <Overlay isVisible={isVisible}>
      <Button title="Play Again" onPress={onPress} />
    </Overlay>
  );
}

GameOver.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};
