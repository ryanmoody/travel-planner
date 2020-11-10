import { getWeather } from '../../../src/server/api/weatherbit';

describe('weatherbit api tests', () => {
  test('getWeather should be defined', () => {
    expect(getWeather).toBeDefined();
  });
});
