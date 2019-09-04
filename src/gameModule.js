import shipFactory from './ship';
import playerFactory from './player';
import gameboardFactory from './gameboard';
import DisplayModule from './displayModule';
import { randomBoolean, randomCoordinates } from './utilities';

const gameModule = (() => {
  const initializeBoard = (board) => {
    let count1 = 0;
    let count2 = 0;
    const placedShips = [];

    while (count1 < 4) {
      const ship = shipFactory(1, true);
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count1 += 1;
        placedShips.push(placedShip);
      }
    }

    while (count2 < 3) {
      const ship = shipFactory(2, randomBoolean());
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count2 += 1;
        placedShips.push(placedShip);
      }
    }
    return placedShips;
  };

  const checkForWin = (player, computer) => {
    let win;
    if (player.board.allSunk() || computer.board.allSunk()) {
      player.active = false;
      computer.active = false;
      if (computer.board.allSunk()) {
        DisplayModule.displayMessage('Player Wins!');
      } else {
        DisplayModule.displayMessage('Computer Wins!');
      }
      const button = document.getElementById('restart');
      button.classList.remove('hide');
      button.addEventListener('click', () => { window.location.reload() }, false);
      win = true;
    } else {
      win = false;
    }
    return win;
  };

  const attack = (attacker, opponent, row, col, div) => {
    if (!attacker.active) return;

    const result = opponent.board.receiveAttack(row, col) ? 'hit' : 'miss';
    DisplayModule.addClassToDiv(div, result);
    if (result === 'miss') {
      attacker.active = false;
      opponent.active = true;
    }
    return result;
  };

  const computerMove = (player, computer) => {
    let row;
    let col;
    let validMove = false;
    
    function finding(arr) {
      return arr[0] === row && arr[1] === col
    }
    while (!validMove) {
      const coordinates = randomCoordinates();
      row = coordinates[0];
      col = coordinates[1];
      const pastMovesIndex = computer.pastMoves
        .findIndex(finding);
      if (pastMovesIndex === -1) validMove = true;
    }

    computer.pastMoves.push([row, col]);

    const div = document.getElementById(`${row}${col}`);

    attack(computer, player, row, col, div);

    checkForWin(player, computer);
  };

  const startGame = () => {
    const playerBoardDiv = document.getElementById('playerBoard');
    const computerBoardDiv = document.getElementById('computerBoard');
    const playerBoard = gameboardFactory();
    const computerBoard = gameboardFactory();
    const playerShips = initializeBoard(playerBoard);
    initializeBoard(computerBoard);
    const player = playerFactory(true, playerBoard, null);
    const computer = playerFactory(false, computerBoard, []);
    DisplayModule.displayBoard(playerBoardDiv, player.board.board);
    DisplayModule.displayBoard(computerBoardDiv, null);
    DisplayModule.displayShips(playerShips);

    const callback = (e) => {
      const row = e.target.getAttribute('data-index')[0];
      const col = e.target.getAttribute('data-index')[1];

      attack(player, computer, +row, +col, e.target);

      if (!checkForWin(player, computer)) {
        while (computer.active) {
          computerMove(player, computer);
        }
      }
    };

    const computerBoardDivs = document.querySelectorAll('.computerBoard');
    [...computerBoardDivs].forEach((div) => {
      div.addEventListener('click', callback, false);
      DisplayModule.addClassToDiv(div, 'inactive');
    });
  };

  return { startGame };
})();

export default gameModule;
