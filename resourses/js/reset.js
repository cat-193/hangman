import { getRandomWord } from './randomWord.js';
import { createWord } from './randomWord.js';
import { wrongCount, correctSymbols } from './correctGuess.js';

export const reset = () => {
  const hangmanImage = document.querySelector('.hangman-box img');
  const guessCount = document.querySelector('.incorrect-count');
  const inputs = document.querySelectorAll('.word-input');

  document.addEventListener('DOMContentLoaded', () => {
    getRandomWord();
    createWord();
  });
  document.querySelector('.words-list').remove();
  document.querySelector('.game-modal').classList.remove('show');
  document
    .querySelectorAll('.key-btn')
    .forEach((item) => (item.disabled = false));
  hangmanImage.src = `./resourses/image/hangman-${wrongCount}.svg`;
  guessCount.textContent = `${wrongCount} / 6`;
  inputs.forEach((item) => {
    item.textContent = '';
    item.classList.remove('guessed');
  });
};
