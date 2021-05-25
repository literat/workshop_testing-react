import { fetchDataPromiseResolve, fetchDataPromiseReject } from './fetchData';

// Async/Await
test('the data is peanut butter', async () => {
  const data = await fetchDataPromiseResolve();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchDataPromiseResolve()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataPromiseReject()).rejects.toMatch('error');
});
