import { SRMapping, assetMapping } from './Constants';

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomObject = (() => {
  const { objects } = assetMapping;

  // Possibly move this code to AsyncStorage - change only when the user has made
  // purchases/equipped new items

  let i;
  const weightedProbabilities = [];

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
export { randomBetween, randomObject };
