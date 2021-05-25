import { fetchDataPromiseResolve, fetchDataPromiseReject } from './fetchData';

// .resolves / .rejects

test('the data is peanut butter', () =>
  expect(fetchDataPromiseResolve()).resolves.toBe('peanut butter'));

test('the fetch fails with an error', () =>
  expect(fetchDataPromiseReject()).rejects.toMatch('error'));
