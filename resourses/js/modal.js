export const createModal = () => {
  const modal = document.createElement('div');
  const content = document.createElement('div');
  const title = document.createElement('h4');
  const text = document.createElement('p');
  const correctWord = document.createElement('span');
  const btnPlay = document.createElement('button');

  modal.classList.add('game-modal');
  content.classList.add('content');
  title.classList.add('modal-title');
  text.classList.add('modal-text');
  correctWord.classList.add('modal-correct');
  btnPlay.classList.add('play-again');

  text.textContent = 'The correct word was: ';
  btnPlay.textContent = 'Play Again';

  modal.append(content);
  content.append(title);
  content.append(text);
  text.append(correctWord);
  content.append(btnPlay);

  return modal;
};
