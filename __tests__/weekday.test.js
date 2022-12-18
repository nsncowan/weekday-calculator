import Calculator from './../src/weekday.js';

describe('Calculator', () => {
  test('should return index of date inputted', () => {
    const weekday = new Calculator('December, 18, 2022');
    expect(weekday.dayOfWeek()).toEqual(0);
  });
})