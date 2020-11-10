import { getDestinationImage } from '../../../src/server/api/pixabay';

describe('pixabay api tests', () => {
  test('getDestinationImage should be defined', () => {
    expect(getDestinationImage).toBeDefined();
  });
});
