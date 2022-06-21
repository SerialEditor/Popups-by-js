'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let containers = document.querySelectorAll('.inner-container');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let gentleHint = document.querySelector('.gentle-hint');
for (let pointer of pointers) {
  pointer.onclick = function() {
    gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
    if (!pointer.contains(imageWrapper)) {
      innerImage.src = pointer.dataset.image;
      pointer.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) {
        imageWrapper.classList.add('visualised');
        pageLink.classList.add('visualised');
      }
    } else {imageWrapper.classList.toggle('visualised'); pageLink.classList.toggle('visualised')}
  }
};



