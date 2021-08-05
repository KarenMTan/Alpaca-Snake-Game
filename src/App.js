import React, { useState } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Head from './app/components/head';
import Food from './app/components/food';
import Tail from './app/components/tail';
import GameOver from './app/components/gameOver';
import Constants from './app/api/Constants';
import { randomBetween } from './app/api/helper';
import GameLoop from './app/api/systems';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column',
  },
  controlRow: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default function AlpacaSnakeGame() {
  const boardWidth = Constants.MAX_WIDTH;
  const boardHeight = Constants.MAX_HEIGHT - Constants.HEADER_HEIGHT;
  let engine = null;
  const [running, setRunning] = useState(true);

  const entities = {
    head: {
      position: [0, 0],
      xspeed: 1,
      yspeed: 0,
      nextMove: 2,
      updateFrequency: 2,
      size: 20,
      renderer: <Head />,
    },
    food: {
      position: [randomBetween(0, Constants.GRID_WIDTH - 1),
        randomBetween(0, Constants.GRID_HEIGHT - 1)],
      size: 20,
      renderer: <Food />,
    },
    tail: {
      size: 20,
      elements: [],
      renderer: <Tail />,
    },
  };

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
    }
  };

  const reset = () => {
    engine.swap(entities);
    setRunning(true);
  };

  /**
   * TODO: Game Mechanics
   * - smoother movement (faster)
   * - components accept assets
   * - change board to the device screen size
   *      - keep in mind fence border
   */

  return (
    <View style={styles.screen}>
      <Text style={{ paddingTop: 20, textTransform: 'uppercase', height: Constants.HEADER_HEIGHT }}>Score   #####</Text>
      <GameEngine
        ref={(ref) => { engine = ref; }}
        style={[{
          width: boardWidth,
          height: boardHeight,
          backgroundColor: '#ffffff',
          flex: null,
        }]}
        systems={[GameLoop]}
        entities={entities}
        running={running}
        onEvent={onEvent}
      />
      <GameOver isVisible={!running} onPress={reset} />
    </View>
  );
}
