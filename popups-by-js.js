'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let gentleHint = document.querySelector('.gentle-hint');
let startPhrase = gentleHint.textContent;

function updateDisplay() {
  gentleHint.textContent = startPhrase;
  if (pageLink.classList.contains('visualised')) {
    pageLink.classList.remove('visualised');
  }
};

window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.image-pointer')) {
    gentleHint.textContent = 'Да не сюда!';
  }
}) 

for (let pointer of pointers) {
  pointer.onclick = function() {
    if (!pointer.contains(pageLink)) {
      innerImage.src = pointer.dataset.image;
      pageLink.href = pointer.dataset.link;
      pointer.append(pageLink);
      if (!pageLink.classList.contains('visualised')) {
        pageLink.classList.add('visualised');
      }
    } else {pageLink.classList.toggle('visualised')}
    if (pageLink.classList.contains('visualised)) {
      gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
    } else {gentleHint.textContent = startPhrase;}
  }
};

window.onblur = function() {
   updateDisplay();
};






