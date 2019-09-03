const DisplayModule = (() => {
  const displayBoard = (parent, matrix) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const div = document.createElement('div');
        if (matrix === null) {
          div.setAttribute('data-index', `${i}${j}`);
          div.classList.add('computerBoard');
        } else {
          div.setAttribute('id', `${i}${j}`);
          div.classList.add('playerBoard');
          if (matrix[i][j] !== ' ' && matrix[i][j] !== 'M') {
            div.classList.add('ship');
          }
        }
        parent.appendChild(div);
      }
    }
  };

  const displayShips = (ships) => {
    ships.forEach((ship) => {
      for (let i = 0; i < ship.cells.length; i += 1) {
        const div = document.getElementById(`${ship.cells[i][0]}${ship.cells[i][1]}`);
        if (i === 0) div.classList.add('first-cell');
        if (i === ship.cells.length - 1) div.classList.add('last-cell');
        if (ship.isHorizontal) {
          div.classList.add('horizontal');
        } else {
          div.classList.add('vertical');
        }
      }
    });
  };

  const addClassToDiv = (div, className) => {
    div.classList.add(className);
  };

  const cleanBoard = (query, id) => {
    const children = document.querySelectorAll(query);
    const parent = document.getElementById(id);

    [...children].forEach((child) => {
      parent.removeChild(child);
    });
  };

  const displayMessage = (msg) => {
    const message = document.getElementById('message');
    message.textContent = msg;
  };

  return {
    displayBoard, displayShips, addClassToDiv, cleanBoard, displayMessage,
  };
})();

export default DisplayModule;
