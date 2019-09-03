const shipFactory = (length, isHorizontal) => {
  const cells = new Array(length).fill(0);
  const isSunk = () => cells.every((cell) => cell === 'X');
  const hit = (cell) => {
    cells[cell] = 'X';
    return cells;
  };
  return {
    length, cells, isSunk, hit, isHorizontal,
  };
};

export default shipFactory;
