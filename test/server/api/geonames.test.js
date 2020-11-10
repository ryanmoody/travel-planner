import { getGeonamesData } from '../../../src/server/api/geonames';

describe('geonames api tests', () => {
  test('getGeonamesData should be defined', () => {
    expect(getGeonamesData).toBeDefined();
  });
});
