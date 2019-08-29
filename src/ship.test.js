const Ship = require('./ship');

test('testing the ship factory function behaviours', () => {
  expect(typeof Ship(5).length).toBe('number');
  expect(Ship(5).length).toBe(5);
  expect(typeof Ship(5).length).not.toBe('string');

  //expect(typeof Ship(5).hit).toBe('boolean');
  //expect(typeof Ship(4).hit).not.toBe('number');

  expect(typeof Ship(5).isSunk).toBe('boolean');
  expect(typeof Ship(6).isSunk).not.toBe('string');
});
