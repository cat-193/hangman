import { wordList } from './wordList.js';
export let currentWord;
export const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(currentWord);
  document.querySelector('.hint-title span').textContent = hint;
  return currentWord;
};

export const createWord = () => {
  const wordsList = document.createElement('ul');
  getRandomWord();
  for (let i = 0; i < currentWord.length; i++) {
    const wordItem = document.createElement('li');
    const wordInput = document.createElement('input');
    wordInput.type = 'text';
    wordInput.maxLength = 1;
    wordsList.classList.add('words-list');
    wordItem.classList.add('word-input');

    wordsList.append(wordItem);
  }

  return wordsList;
};
