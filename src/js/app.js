import { numberBoard } from './helpers/dom';

import { getButtonState } from './helpers/buttonData';

numberBoard.addEventListener('click', e => {
  const selectedButton = e.target;

  // Ensure element clicked is a button
  const isButton = Boolean(selectedButton.nodeName.toLowerCase() === 'button');
  if (!isButton) return;

  // Get selected button state - active, highlighted, sum, default
  const selectedButtonState = getButtonState(selectedButton);

  console.log(selectedButton, selectedButtonState);
});