import boardData from '../../helpers/boardsData';
import print from '../../helpers/util';
import pins from '../pins/pins';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('button clicked', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = (boards) => {
  let domString = '';

  domString += '<div class="row">';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id="${board.id}" class="card">`;
    domString += '<div class="card-body">';
    domString += '<div class="text-center">';
    domString += `<p>${board.name}</p>`;
    domString += '<button class="btn btn-info see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  print.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
      domStringBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
