import { assetMapping } from './Constants';

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomObject = (() => {
  const { objects } = assetMapping;
  const { length } = objects;
  const prob = randomBetween(0, length - 1);

  return objects[prob].uri;
});

// eslint-disable-next-line import/prefer-default-export
export { randomBetween, randomObject };
