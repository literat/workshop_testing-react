// https://www.npmjs.com/package/jest-each

import each from 'jest-each';
import { sum } from './sum';

each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
]).test('returns the result of adding %d to %d', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});

each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
]).test('returns the result of adding $a to $b', ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
