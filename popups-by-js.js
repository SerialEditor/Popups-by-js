'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let gentleHint = document.querySelector('.gentle-hint');
for (let popup of popups) {
  popup.onclick = function() {
    gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
    if (!popup.contains(imageWrapper)) {
      innerImage.src = popup.dataset.image;
      popup.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) {
        imageWrapper.classList.add('visualised');
        pageLink.classList.add('visualised');
      }
    } else {imageWrapper.classList.toggle('visualised'); pageLink.classList.toggle('visualised')}
  }
};



