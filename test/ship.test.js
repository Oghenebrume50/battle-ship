import shipFactory from '../src/ship';

test('ship can get hit', () => {
  const ship = shipFactory(7);
  ship.hit(0);
  expect(ship.cells[0]).toEqual('X');
});

test('ship is not sunk', () => {
  const ship = shipFactory(1);
  expect(ship.isSunk()).toBe(false);
});

test('ship is sunk', () => {
  const ship = shipFactory(1);
  ship.hit(0);
  expect(ship.isSunk()).toBe(true);
  expect(typeof ship.isSunk()).toBe('boolean');
  expect(typeof ship.isSunk()).not.toBe('string');
});

test('ship factory length property', () => {
  expect(typeof shipFactory(5).length).toBe('number');
  expect(shipFactory(5).length).toBe(5);
  expect(typeof shipFactory(5).length).not.toBe('string');
});
