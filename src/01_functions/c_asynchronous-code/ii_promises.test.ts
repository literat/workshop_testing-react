import { fetchDataPromiseResolve, fetchDataPromiseReject } from './fetchData';

// Promises

test('the data is peanut butter', () =>
  fetchDataPromiseResolve().then((data) => {
    expect(data).toBe('peanut butter');
  }));

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch((e) => expect(e).toMatch('error'));
});
