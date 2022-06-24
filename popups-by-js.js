'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let gentleHint = document.querySelector('.gentle-hint');
let startPhrase = gentleHint.textContent;

function removeDisplay() {
  if (pageLink.classList.contains('visualised')) {
    pageLink.classList.remove('visualised');
  }
};

for (let pointer of pointers) {
  pointer.onclick = function() {
    gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
    if (!pointer.contains(pageLink)) {
      innerImage.src = pointer.dataset.image;
      pageLink.href = pointer.dataset.link;
      pointer.append(pageLink);
      if (!pageLink.classList.contains('visualised')) {
        pageLink.classList.add('visualised');
      }
    } else {pageLink.classList.toggle('visualised')}
  }
};

window.onblur = function() {
   gentleHint.textContent = startPhrase;
   removeDisplay();
};






