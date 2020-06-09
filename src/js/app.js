import { numberBoard } from './helpers/dom';

import { getButtonState } from './helpers/buttonData';
import { handleActiveButton } from './lib/handleActiveButton';
import { handleHighlightedButton } from './lib/handleHighlightedButton';
import { handleHighlightedSumButton } from './lib/handleHighlightedSumButton';
import { handleDefaultButton } from './lib/handleDefaultButton';

const boardState = { activeNumber: 0 };

numberBoard.addEventListener('click', e => {
  const selectedButton = e.target;

  // Ensure element clicked is a button
  const isButton = Boolean(selectedButton.nodeName.toLowerCase() === 'button');
  if (!isButton) return;

  // Get selected button state - active, highlighted, sum, default
  const selectedButtonState = getButtonState(selectedButton);

  // Check each button state
  if (selectedButtonState === 'active') handleActiveButton(boardState);

  if (selectedButtonState === 'highlighted') handleHighlightedButton(
    selectedButton,
    boardState
  );

  if (selectedButtonState === 'highlighted-sum') handleHighlightedSumButton(selectedButton);

  if (selectedButtonState === 'default') handleDefaultButton(
    selectedButton,
    boardState
  );
});