import React, { useState } from 'react';
import {
  Alert, Button, StatusBar, StyleSheet, TouchableOpacity, View,
} from 'react-native';
// import { GameEngine, dispatch } from 'react-native-game-engine';
import { GameEngine } from 'react-native-game-engine';
import Head from './app/components/head';
import Food from './app/components/food';
import Tail from './app/components/tail';
import Constants from './app/api/Constants';
import { randomBetween } from './app/api/helper';
import GameLoop from './app/api/systems';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  const boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  let engine = null;
  const [running, setRunning] = useState(true);

  // const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
      Alert.alert('Game Over');
    }
  };

  const reset = () => {
    engine.swap({
      1: {
        // position: [0, 0],
        xspeed: 1,
        yspeed: 0,
        nextMove: 10,
        updateFrequency: 10,
        // size: 20,
        renderer: <Head position={[0, 0]} size={20} />,
      },
      2: {
        /* position: [randomBetween(0, Constants.GRID_SIZE - 1),
        randomBetween(0, Constants.GRID_SIZE - 1)], */
        // size: 20,
        renderer: <Food
          position={[randomBetween(0, Constants.GRID_SIZE - 1),
            randomBetween(0, Constants.GRID_SIZE - 1)]}
          size={20}
        />,
      },
      3: {
        // size: 20,
        // elements: [],
        renderer: <Tail elements={[]} size={20} />,
      },
    });
    setRunning(true);
  };

  return (
    <View style={styles.screen}>
      <GameEngine
        ref={(ref) => { engine = ref; }}
        style={[{
          width: boardSize, height: boardSize, backgroundColor: '#ffffff', flex: null,
        }]}
        systems={[GameLoop]}
        entities={{
          head: {
            position: [0, 0],
            xspeed: 1,
            yspeed: 0,
            nextMove: 10,
            updateFrequency: 10,
            size: 20,
            renderer: <Head position={[0, 0]} size={20} />,
          },
          food: {
            position: [randomBetween(0, Constants.GRID_SIZE - 1),
              randomBetween(0, Constants.GRID_SIZE - 1)],
            size: 20,
            renderer: <Food
              position={[randomBetween(0, Constants.GRID_SIZE - 1),
                randomBetween(0, Constants.GRID_SIZE - 1)]}
              size={20}
            />,
          },
          tail: {
            size: 20,
            elements: [],
            renderer: <Tail elements={[]} size={20} />,
          },
        }}
        running={running}
        onEvent={onEvent}
      >

        <StatusBar hidden />

      </GameEngine>
      <Button title="New Game" onPress={reset} />
    </View>
  );
}
