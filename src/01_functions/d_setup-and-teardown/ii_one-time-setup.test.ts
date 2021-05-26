import { initializeCityDatabase, clearCityDatabase, isCity } from './city';

beforeAll(() => initializeCityDatabase());

afterAll(() => clearCityDatabase());

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
