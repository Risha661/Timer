'use strict';

let container = document.createElement('div');
let input = document.createElement('input');
input.setAttribute('type', 'text');

let timer;
let paragraph = document.createElement('p');

container.appendChild(input);
container.appendChild(paragraph);
document.body.appendChild(container);

input.addEventListener('input', function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    paragraph.textContent = input.value;
  }, 300)
});
