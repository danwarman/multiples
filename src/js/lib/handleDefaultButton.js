import {
  numberBoard,
  defaultButtonClass,
  activeButtonClass,
  highlightedButtonClass
} from '../helpers/dom';

import { resetAllButtons } from '../helpers/resetAllButtons';

// Get all number buttons
const allNumberButtons = numberBoard.children;

export const handleDefaultButton = (
  selectedButton,
  newBoardState
) => {
  // Get number of button currently selected
  const { number: selectedNumber } = selectedButton.dataset;

  // Reset active number
  newBoardState.activeNumber = selectedNumber;

  // Reset all buttons
  resetAllButtons(allNumberButtons);

  // Update class
  selectedButton.classList.remove(defaultButtonClass);
  selectedButton.classList.add(activeButtonClass);

  // Find & update multipliers
  updateMultipliers(allNumberButtons, selectedNumber);
};

const updateMultipliers = (buttons, selectedNumber) => {
  for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];
    const { number: currentNumber } = currentButton.dataset;

    if (
      currentNumber !== selectedNumber &&
      currentNumber % selectedNumber === 0
    ) {
      currentButton.classList.remove(defaultButtonClass);
      currentButton.classList.add(highlightedButtonClass);
    }
  }
};