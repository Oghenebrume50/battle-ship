/* eslint-disable no-param-reassign */
function gameBoard(ships) {
  const board = Array.from(new Array(100), () => false);

  const setShipPosition = (ship, index, orientation) => {
    const limit = orientation === 'horizontal' ? index + ship.length : index + 10 * ship.length;

    ship.position = ship.position || [];
    const origShipPosition = [...ship.position];
    ship.position = [];
    const origBoardboard = [...this.board];

    for (let i = index, j = 0; i < limit;) {
      const horizontalCondition = orientation === 'horizontal' ? (ship.position !== [] && (ship.position[ship.position.length - 1] + 1) % 10 !== 0) : true;
      if (this.board[i] === undefined && i < this.board.length && horizontalCondition) {
        ship.position.push(i);
        this.board[i] = i;
        this.board[origShipPosition[j]] = undefined;
        j += 1;
        const increment = orientation === 'horizontal' ? 1 : 10;
        i += increment;
      } else {
        this.board = origBoardboard;
        ship.position = origShipPosition;
        return false;
      }
    }
    return true;
  }

  const receiveAttack = (index, method) => {
    // Determine if the index in board is occupied
    if (this.board[index] === false) {
      // If yes then determine the ship that occupies it
      Object.keys(ships).forEach((key) => {
        if (ships[key].position.includes(index)) {
          ships[key][method]();
          this.board[index] = true;
        }
      });
    } else {
      // Else update the board to reflect a missed shot
      this.board[index] = false;
    }
  }

  const allShipsSunk = (isSunkMethod) => {
    return Object.keys(ships).every(key => ships[key][isSunkMethod]());
  }

  return {
    board,
    setShipPosition,
    receiveAttack,
    allShipsSunk,
  };
}

export default gameBoard;
