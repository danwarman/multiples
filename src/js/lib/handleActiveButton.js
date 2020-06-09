import { numberBoard } from '../helpers/dom';
import { resetAllButtons } from '../helpers/resetAllButtons';

// Get all number buttons
const allNumberButtons = numberBoard.children;

export const handleActiveButton = newBoardState => {
  // Reset active number
  newBoardState.activeNumber = 0;

  // Reset all buttons
  resetAllButtons(allNumberButtons);
};