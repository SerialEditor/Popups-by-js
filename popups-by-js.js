'use strict';
let container = document.querySelector('.container');
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let gentleHint = document.querySelector('.gentle-hint');
container.onclick = function(event) {
  let pointer = event.target.closest('div');
  if (!pointer) return;
  gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
  if (!pointer.contains(pageLink)) {
    innerImage.src = pointer.dataset.image;
    pointer.append(pageLink);
    if (!pageLink.classList.contains('visualised')) {
      pageLink.classList.add('visualised');
    }
  } else {pageLink.classList.toggle('visualised')}
};



