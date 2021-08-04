// import React from 'react';
import Constants from './Constants';
import { randomBetween } from './helper';

// eslint-disable-next-line no-unused-vars
const GameLoop = (entities, { touches, dispatch, events }) => {
  const { head } = entities;
  const { food } = entities;
  const { tail } = entities;

  /* if (events.length) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'move-down' && head.yspeed !== -1) {
        head.yspeed = 1;
        head.xspeed = 0;
      } else if (events[i].type === 'move-up' && head.yspeed !== 1) {
        head.yspeed = -1;
        head.xspeed = 0;
      } else if (events[i].type === 'move-left' && head.xspeed !== 1) {
        head.yspeed = 0;
        head.xspeed = -1;
      } else if (events[i].type === 'move-right' && head.xspeed !== -1) {
        head.yspeed = 0;
        head.xspeed = 1;
      }
    }
  } */

  // Swipe controls?
  touches.filter((t) => t.type === 'move').forEach((t) => {
    if (head && head.position) {
      if (t.delta.pageY && t.delta.pageX) {
        if (t.delta.pageY && Math.abs(t.delta.pageY) > Math.abs(t.delta.pageX)) {
          if (t.delta.pageY < 0 && head.yspeed !== 1) {
            head.yspeed = -1;
            head.xspeed = 0;
          } else if (t.delta.pageY > 0 && head.yspeed !== -1) {
            head.yspeed = 1;
            head.xspeed = 0;
          }
        } else if (t.delta.pageX) {
          if (t.delta.pageX < 0 && head.xspeed !== 1) {
            head.xspeed = -1;
            head.yspeed = 0;
          } else if (t.delta.pageX > 0 && head.xspeed !== -1) {
            head.xspeed = 1;
            head.yspeed = 0;
          }
        }
      }
    }
  });

  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;
    if (
      head.position[0] + head.xspeed < 0
            || head.position[0] + head.xspeed >= Constants.GRID_SIZE
            || head.position[1] + head.yspeed < 0
            || head.position[1] + head.yspeed >= Constants.GRID_SIZE
    ) {
      // snake hits the wall
      dispatch({ type: 'game-over' });
    } else {
      // move the tail
      const newTail = [[head.position[0], head.position[1]]];
      tail.elements = newTail.concat(tail.elements).slice(0, -1);

      // snake moves
      head.position[0] += head.xspeed;
      head.position[1] += head.yspeed;

      // check if it hits the tail
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < tail.elements.length; i++) {
        if (tail.elements[i][0] === head.position[0] && tail.elements[i][1] === head.position[1]) {
          dispatch({ type: 'game-over' });
        }
      }

      if (head.position[0] === food.position[0] && head.position[1] === food.position[1]) {
        // eating Food
        tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements);

        food.position[0] = randomBetween(0, Constants.GRID_SIZE - 1);
        food.position[1] = randomBetween(0, Constants.GRID_SIZE - 1);
      }
    }
  }

  return entities;
};

export default GameLoop;
