import boardData from '../../helpers/boardsData';

const initBoards = () => {
  boardData.leadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
