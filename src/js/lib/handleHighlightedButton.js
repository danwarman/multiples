import {
  highlightedButtonClass,
  highlightedSumButtonClass
} from '../helpers/dom';

export const handleHighlightedButton = (
  selectedButton,
  boardState
) => {
  // Get number of button currently selected
  const { number: selectedNumber } = selectedButton.dataset;

  // Get active number from board state
  const { activeNumber } = boardState;

  // Get second value for Sum
  const secondValue = selectedNumber / activeNumber;

  // Set sum as content of button
  selectedButton.textContent = activeNumber + ' x ' + secondValue + ' = ' + selectedNumber;

  // Update class
  selectedButton.classList.remove(highlightedButtonClass);
  selectedButton.classList.add(highlightedSumButtonClass);
};