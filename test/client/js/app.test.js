import { handleSubmit, handleLogoClick } from '../../../src/client/js/app';

describe('app tests', () => {
  test('handleSubmit should be defined', () => {
    expect(handleSubmit).toBeDefined();
  });

  test('handleLogoClick should be defined', () => {
    expect(handleLogoClick).toBeDefined();
  });
});
