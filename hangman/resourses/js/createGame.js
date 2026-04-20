import { createKeyboard } from './keyboards.js';
import { createWord } from './randomWord.js';
import { checkWordCorrectInput } from './correctGuess.js';
import { createModal } from './modal.js';
import { reset } from './reset.js';

export const createGame = () => {
  const container = document.createElement('div');
  const box = document.createElement('div');
  const gallows = document.createElement('img');
  const title = document.createElement('h1');
  const gameBox = document.createElement('div');
  const hint = document.createElement('h4');
  const hintText = document.createElement('span');
  const incorrectTitle = document.createElement('h4');
  const incorrectCount = document.createElement('span');

  gallows.src = '../image/hangman-0.svg';
  gallows.alt = 'виселица';
  title.textContent = 'Hangman game';
  hint.textContent = 'Hint: ';
  incorrectTitle.textContent = 'Incorrect guesses: ';
  incorrectCount.textContent = '0 / 6';

  container.classList.add('container');
  gallows.classList.add('gallows');
  title.classList.add('title');
  hint.classList.add('hint-title');
  incorrectTitle.classList.add('incorrect-text');
  incorrectCount.classList.add('incorrect-count');
  gameBox.classList.add('game-box');
  box.className = 'hangman-box';

  document.body.append(container);
  container.append(createModal());
  container.append(box);

  box.append(gallows);
  box.append(title);
  container.append(gameBox);
  document.addEventListener('DOMContentLoaded', () => {
    gameBox.append(createWord());
    checkWordCorrectInput();
  });
  const restart = document.querySelector('.play-again');
  restart.addEventListener('click', () => {
    reset();
    gameBox.append(createWord());
    checkWordCorrectInput();
  });
  gameBox.append(hint);
  hint.append(hintText);

  gameBox.append(incorrectTitle);
  incorrectTitle.append(incorrectCount);
  gameBox.append(createKeyboard());
};
