import {
  highlightedButtonClass,
  highlightedSumButtonClass
} from '../helpers/dom';

export const handleHighlightedSumButton = selectedButton => {
  // Get number of button currently selected
  const { number: selectedNumber } = selectedButton.dataset;

  // Reset button content to number
  selectedButton.textContent = selectedNumber;

  // Update class
  selectedButton.classList.remove(highlightedSumButtonClass);
  selectedButton.classList.add(highlightedButtonClass);
};