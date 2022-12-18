import Weekday from './../src/weekday.js';

describe('Weekday', () => {
  test('should return index of date inputted', () => {
    const weekday = new Weekday('December, 18, 2022');
    expect(weekday.getDay()).toEqual(0);
  });
})