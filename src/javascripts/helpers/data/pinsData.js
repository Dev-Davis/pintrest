import axios from 'axios';

// Return the promise you're writing
const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../../../../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      // filter the pins
      console.error('boardId inside pins data', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      // resolve the filtered pins
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard };
