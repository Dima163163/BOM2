'use strict';

const createInput = () => {
  const input = document.createElement('input');
  document.querySelector('body').append(input);
};

const createParagraph = () => {
  const p = document.createElement('p');
  document.querySelector('body').append(p);
};

const showText = () => {
  document.querySelector('input').addEventListener('blur', () => {
    setTimeout(() => {
      document.querySelector('p').textContent =
      document.querySelector('input').value;
    }, 300);
  });
};

const init = () => {
  createInput();
  createParagraph();
  showText();
};

init();
