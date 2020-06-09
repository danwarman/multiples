import { numberBoard } from './helpers/dom';

numberBoard.addEventListener('click', e => {
  const selectedButton = e.target;

  console.log(selectedButton);
});