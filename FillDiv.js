export const fillRed = ({ target }) => {
  target.style.background = '#f00';
  target.removeEventListener('click', fillRed);
  target.addEventListener('click', fillGreen);
};
export const fillGreen = ({ target }) => {
  target.style.background = '#0f0';
  target.removeEventListener('click', fillGreen);
  target.addEventListener('click', fillRed);
};

const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second');

firstDiv.addEventListener('click', fillRed);
secondDiv.addEventListener('click', fillRed);
