import gameModule from './gameModule';
import DisplayModule from './displayModule';

const play = document.getElementById('play');
const randomize = document.getElementById('randomize');

function wipeDom() {
  DisplayModule.cleanBoard('.playerBoard', 'playerBoard');
  DisplayModule.cleanBoard('.computerBoard', 'computerBoard');
  gameModule.startGame();
}

function playIt() {
  const computerBoardDivs = document.querySelectorAll('.computerBoard');
  [...computerBoardDivs].forEach((div) => {
    div.classList.remove('inactive');
  });
  DisplayModule.addClassToDiv(randomize, 'hide');
  DisplayModule.addClassToDiv(play, 'hide');
}

randomize.addEventListener('click', wipeDom, false);

play.addEventListener('click', playIt, false);

gameModule.startGame();
