import React, { useState } from 'react';
import {
  StyleSheet, View, Text, // Animated,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Head from './app/components/head';
import Food from './app/components/food';
import Poison from './app/components/poison';
import Tail from './app/components/tail';
import GameOver from './app/components/gameOver';
import Constants, { assetMapping } from './app/api/Constants';
import { randomBetween, randomObject } from './app/api/helper';
import GameLoop from './app/api/systems';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

/* const StyledView = styled.View`
border-image: url('./app/assets/doily-border-image-slice.png') 30;
`;

const StyledText = styled.Text`
  color: palevioletred;
`; */

export default function AlpacaSnakeGame() {
  const boardWidth = Constants.VISUAL_BOARD_WIDTH;
  const boardHeight = Constants.VISUAL_BOARD_HEIGHT;
  const cellSize = Constants.CELL_SIZE;
  let engine = null;

  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [deltaScore, setDeltaScore] = useState('');

  // const nextTail = randomObject();
  const { goodObjects } = assetMapping;
  const { badObjects } = assetMapping;

  const entities = {
    head: {
      position: [0, 0],
      xspeed: 1,
      yspeed: 0,
      nextMove: 6,
      updateFrequency: 6,
      size: cellSize,
      renderer: <Head />,
    },
    food: {
      info: randomObject(goodObjects),
      position: [randomBetween(0, Constants.GRID_WIDTH - 1),
        randomBetween(0, Constants.GRID_HEIGHT - 1)],
      size: cellSize,
      renderer: <Food />,
    },
    tail: {
      size: cellSize,
      positions: [],
      assetSources: [],
      renderer: <Tail />,
    },
    poison: {
      info: [randomObject(badObjects)],
      positions: [[randomBetween(0, Constants.GRID_WIDTH - 1),
        randomBetween(0, Constants.GRID_HEIGHT - 1)]],
      size: cellSize,
      renderer: <Poison />,
    },
  };

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
    } else if (e.type === 'add-100') {
      setDeltaScore('+100');
      setScore(score + 100);
    } else if (e.type === 'add-200') {
      setDeltaScore('+200');
      setScore(score + 200);
    } else if (e.type === 'add-500') {
      setDeltaScore('+500');
      setScore(score + 500);
    } else if (e.type === 'subtract-100') {
      setDeltaScore('-100');
      setScore(score - 100);
    }
  };

  const reset = () => {
    engine.swap(entities);
    setScore(0);
    setDeltaScore('');
    setRunning(true);
  };

  /* const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
      console.warn(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
      // value previously stored
        return value;
      }
      return null;
    } catch (e) {
    // error reading value
      console.warn(e);
    }
  }; */

  /**
   * TODO: Game Mechanics
   * - smoother movement (faster)
   * - components accept assets
   *      - AsyncStorage - keep track of what skin is being displayed to the "head"
   * - change board to the device screen size
   *      - keep in mind fence border
   */

  /**
    * TODO: Game Mechanics II
    * - test border
    * - spawn percentage
    * - score
    * - tail
   */

  /**
   * TODO: Game Mechanics III
   * - Friends (points + add to end of tail) vs. Food (points only)
   * - Display the increase in points (+50)
   * - backend (store + equip)
   */

  /**
   * TODO: Game Mechanics IV
   * - Create enemies and poison
   * - Enemies and poison sometimes appear with the objects and stay on the board
   * (everytime an object appears, there is a 20% chance of a bad item appearing alongside it)
   * - Once a bad item appears, good items cannot inhabit that same position on the board
   */

  return (
    <View style={styles.screen}>
      <View style={{
        height: Constants.HEADER_HEIGHT,
        width: Constants.MAX_WIDTH,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
      }}
      >
        <Text style={{ textTransform: 'uppercase', marginRight: 20 }}>
          Score
          {'  '}
          {score}
        </Text>
        <Text style={{ color: '#858585' }}>
          {deltaScore}
        </Text>
      </View>
      <View style={{ borderColor: '#858585', borderWidth: cellSize, borderStyle: 'solid' }}>
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
      </View>
      <GameOver isVisible={!running} onPress={reset} />
    </View>
  );
}
