import boardData from '../../helpers/boardsData';
import print from '../../helpers/util';


const domStringBuilder = (boards) => {
  let domString = '';

  domString += '<div class="row">';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<p>${board.name}</p>`;
    domString += '</div>';
  });
  domString += '</div>';
  print.printToDom('user-boards', domString);
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
