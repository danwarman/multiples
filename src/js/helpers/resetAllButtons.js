import {
  defaultButtonClass,
  activeButtonClass,
  highlightedButtonClass,
  highlightedSumButtonClass
} from './dom';

export const resetAllButtons = buttons => {
  for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];
    const { number: currentNumber } = currentButton.dataset;

    currentButton.classList.remove(
      activeButtonClass,
      highlightedButtonClass,
      highlightedSumButtonClass
    );

    currentButton.classList.add(defaultButtonClass);
    currentButton.textContent = currentNumber;
  }
};