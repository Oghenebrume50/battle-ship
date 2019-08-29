const Ship = (length) => {
  const positions = Array.from({ length }, () => false);
  const hit = (spot) => { positions[spot] };
  const isSunk = () => positions.every((spot) => spot);
  return {
    hit: hit(),
    isSunk: isSunk(),
    length: positions.length,
  };
};

module.exports = Ship;
