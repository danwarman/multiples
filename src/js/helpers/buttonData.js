import {
  defaultButtonClass,
  activeButtonClass,
  highlightedButtonClass,
  highlightedSumButtonClass
} from './dom';

export const getButtonState = btn => {
  if (!btn) return;
  const classList = btn.classList;

  if (classList.contains(defaultButtonClass)) return 'default';
  if (classList.contains(activeButtonClass)) return 'active';
  if (classList.contains(highlightedButtonClass)) return 'highlighted';
  if (classList.contains(highlightedSumButtonClass)) return 'highlighted-sum';
};