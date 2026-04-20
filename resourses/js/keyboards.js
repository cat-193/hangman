import { checkWordCorrectOnKeyboard } from './correctGuess.js';
export const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  for (let i = 97; i <= 122; i++) {
    const btnKey = document.createElement('button');
    btnKey.classList.add('key-btn');
    btnKey.textContent = String.fromCharCode(i);
    keyboard.append(btnKey);
    btnKey.addEventListener('click', (item) => {
      checkWordCorrectOnKeyboard(item.target, String.fromCharCode(i));
    });
  }
  return keyboard;
};
