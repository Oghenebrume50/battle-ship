import divFactory from './elementFactory';

const gameStartDisplay = () => {
    const container = document.querySelector('.container');
    const boardOne = divFactory('board');
    const boardTwo = divFactory('board');
    const gridItem = divFactory('griditem');

    for (let i = 0; i < 99; i++) {
        boardOne.append(gridItem);
        boardTwo.append(gridItem)
    }

    container.append(boardOne, boardTwo);

    return container;
}