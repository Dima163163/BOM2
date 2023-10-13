'use strict';

const createInput = () => {
  const input = document.createElement('input');
  document.querySelector('body').append(input);
};

const createParagraph = () => {
  const p = document.createElement('p');
  document.querySelector('body').append(p);
};

const debounce = (func, timeoutMs) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), timeoutMs);
  };
};

const showText = () => {
  document.querySelector('p').textContent =
  document.querySelector('input').value;
};


const init = () => {
  createInput();
  createParagraph();
  const debounceUpdate = debounce(showText, 300);
  document.querySelector('input').addEventListener('input', debounceUpdate);
};

init();
