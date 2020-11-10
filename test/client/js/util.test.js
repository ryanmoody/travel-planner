const { TestScheduler } = require("jest");

import {
  getWeekdayName,
  getCalendarDate,
  getDateDifference,
  setVisibility
} from '../../../src/client/js/util';

describe('util tests', () => {
  test('getWeekdayName should be defined', () => {
    expect(getWeekdayName).toBeDefined();
  });

  test('getCalendarDate should be defined', () => {
    expect(getCalendarDate).toBeDefined();
  });

  test('getDateDifference should be defined', () => {
    expect(getDateDifference).toBeDefined();
  });
  
  test('setVisibility should be defined', () => {
    expect(setVisibility).toBeDefined();
  });
});
