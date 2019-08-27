const Ship = (length) => {
  const spots = new Array(length);
  const hit = () => true;
  const isSunk = () => spots.every((spot) => spot === 'x');
  //const positionShip = () => true;

  return {
    spots,
    hit: hit(),
    isSunk: isSunk(),
    length: spots.length,
  };
};

module.exports = Ship;
