import { fetchDataCallback } from './fetchData';

// Callbacks

// Don't do this!
test('the data is peanut butter', () => {
  function callback(data: string) {
    expect(data).toBe('peanut butter');
  }

  fetchDataCallback(callback);
});

test('the data is peanut butter', (done) => {
  function callback(data: string) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchDataCallback(callback);
});
