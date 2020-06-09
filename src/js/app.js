import { numberBoard } from './helpers/dom';

import { getButtonState } from './helpers/buttonData';
import { handleActiveButton } from './lib/handleActiveButton';

const boardState = { activeNumber: 0 };

numberBoard.addEventListener('click', e => {
  const selectedButton = e.target;

  // Ensure element clicked is a button
  const isButton = Boolean(selectedButton.nodeName.toLowerCase() === 'button');
  if (!isButton) return;

  // Get selected button state - active, highlighted, sum, default
  const selectedButtonState = getButtonState(selectedButton);

  console.log(selectedButton, selectedButtonState);

  if (selectedButtonState === 'active') handleActiveButton(boardState);
  // ''highlighted' => handleHighlightedButton
  // 'highlighted-sum' => handleHighlightedSumButton
  // 'default' => handleDefaultButton
});