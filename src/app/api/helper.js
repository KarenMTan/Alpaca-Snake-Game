import { SRMapping } from './Constants';

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const doInsertBadObject = (() => {
  const chance = randomBetween(1, 5);

  // console.log(chance);
  return chance === 1;
});

const randomObject = ((objects) => {
  /* const { objects } = assetMapping;
  const { badObjects } = assetMapping; */

  // Possibly move this code to AsyncStorage - change only when the user has made
  // purchases/equipped new items

  let i;
  const weightedProbabilities = []; // Cumulative sum of the weighted probabilities

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < objects.length; i++) {
    const { spawnRate } = objects[i];
    weightedProbabilities[i] = SRMapping[spawnRate] + (weightedProbabilities[i - 1] || 0);
  }

  const prob = Math.random() * weightedProbabilities[weightedProbabilities.length - 1];

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < weightedProbabilities.length; i++) {
    if (weightedProbabilities[i] > prob) {
      break;
    }
  }

  return objects[i];
});

// eslint-disable-next-line import/prefer-default-export
export { randomBetween, randomObject, doInsertBadObject };
