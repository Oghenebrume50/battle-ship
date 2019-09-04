const gameboardFactory = () => {
  const board = new Array(10);
  for (let n = 0; n < 10; n += 1) {
    board[n] = new Array(10).fill(' ');
  }

  const validCoordinates = (l, isHorizontal, coordinates) => {
    if (
      board[coordinates[0]][coordinates[1]] !== ' '
      || (isHorizontal && coordinates[1] + l > 10)
      || (!isHorizontal && coordinates[0] + l > 10)
    ) return false;

    const row = coordinates[0];
    const col = coordinates[1];

    let rowStart = row - 1;
    if (row === 0) rowStart = 0;
    let colStart = col - 1;
    if (col === 0) colStart = 0;

    let rowEnd;
    let colEnd;

    if (isHorizontal) {
      rowEnd = row + 2;
      if (row === 9) rowEnd = 10;
      colEnd = col + l + 1;
      if (col + l === 10) colEnd = 10;
    } else {
      rowEnd = row + l + 1;
      if (row + l === 10) rowEnd = 10;
      colEnd = col + 2;
      if (col === 9) colEnd = 10;
    }

    for (let i = rowStart; i < rowEnd; i += 1) {
      for (let j = colStart; j < colEnd; j += 1) {
        if (board[i][j] !== ' ') return false;
      }
    }
    return true;
  };

  const placeShip = (ship, coordinates) => {
    if (!validCoordinates(ship.length, ship.isHorizontal, coordinates)) {
      return -1;
    }

    if (ship.isHorizontal) {
      const row = coordinates[0];
      for (
        let i = coordinates[1], count = 0;
        i < coordinates[1] + ship.length;
        i += 1, count += 1
      ) {
        ship.cells[count] = [row, i];
        board[row][i] = ship;
      }
    } else {
      const col = coordinates[1];
      for (
        let i = coordinates[0], count = 0;
        i < coordinates[0] + ship.length;
        i += 1, count += 1
      ) {
        ship.cells[count] = [i, col];
        board[i][col] = ship;
      }
    }
    return ship;
  };

  const receiveAttack = (x, y) => {
    let attack;
    if (board[x][y] === ' ') {
      board[x][y] = 'M';
      attack = false;
    } else {
      const ship = board[x][y];
      const i = ship.cells.findIndex((arr) => arr[0] === x && arr[1] === y);
      ship.hit(i);
      attack = true;
    }
    return attack;
  };

  const allSunk = () => {
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board.length; j += 1) {
        if (typeof board[i][j] === 'object' && !board[i][j].isSunk()) return false;
      }
    }
    return true;
  };

  return {
    board,
    placeShip,
    receiveAttack,
    allSunk,
  };
};

export default gameboardFactory;
