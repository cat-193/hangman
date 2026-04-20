import { currentWord } from './randomWord.js';

export let wrongCount = 0;
const maxGuesses = 6;
export let correctSymbols = [];

const gameOver = (isWin) => {
  wrongCount = 0;
  correctSymbols = [];
  setTimeout(() => {
    document.querySelector('.modal-title').textContent = `${
      isWin ? 'Victory!' : 'You are lost :('
    }`;
    document.querySelector('.modal-correct').textContent = currentWord;
    document.querySelector('.game-modal').classList.add('show');
  }, 200);
};

export const checkWordCorrectOnKeyboard = (button, clickedLetter) => {
  const inputs = document.querySelectorAll('.word-input');
  const guessCount = document.querySelector('.incorrect-count');
  const hangmanImage = document.querySelector('.hangman-box img');
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((item, index) => {
      if (item === clickedLetter) {
        correctSymbols.push(item);
        inputs[index].textContent = item;
        inputs[index].classList.add('guessed');
      }
    });
  } else {
    wrongCount++;
    hangmanImage.src = `/unnamed-193-JSFE2023Q4/hangman/resourses/image/hangman-${wrongCount}.svg`;
  }

  button.disabled = true;
  guessCount.textContent = `${wrongCount} / ${maxGuesses}`;

  if (wrongCount === maxGuesses) return gameOver(false);
  if (correctSymbols.length === currentWord.length) return gameOver(true);
};

export const checkWordCorrectInput = () => {
  const inputs = document.querySelectorAll('.word-input');
  const guessCount = document.querySelector('.incorrect-count');
  const hangmanImage = document.querySelector('.hangman-box img');
  let stopInput = false;
  let pressedKeys = [];

  document.addEventListener('keydown', (e) => {
    const currentKey = e.key;
    const clickKey = currentKey.toLowerCase();

    if (stopInput) {
      e.preventDefault();
      return;
    }

    if (!e.code.includes('Key')) return;

    if (pressedKeys.includes(clickKey)) {
      e.preventDefault();
      return;
    }

    if (currentWord.includes(clickKey)) {
      [...currentWord].forEach((elem, index) => {
        if (elem === clickKey) {
          correctSymbols.push(elem);
          pressedKeys.push(clickKey);
          inputs[index].innerText = elem;
          inputs[index].classList.add('guessed');
        }
      });
    } else {
      wrongCount++;
      hangmanImage.src = `/unnamed-193-JSFE2023Q4/hangman/resourses/image/hangman-${wrongCount}.svg`;
    }
    guessCount.textContent = `${wrongCount} / ${maxGuesses}`;

    document.querySelectorAll('.key-btn').forEach((btn) => {
      if (btn.textContent === clickKey) {
        pressedKeys.push(clickKey);
        btn.disabled = true;
      }
    });

    if (wrongCount === maxGuesses) {
      gameOver(false);
      stopInput = true;
    }

    if (correctSymbols.length === currentWord.length) {
      gameOver(true);
      stopInput = true;
    }
  });
};
