'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let closedButton = document.querySelector('.closed-button');
let gentleHint = document.querySelector('.gentle-hint');
for (let popup of popups) {
  popup.onclick = function() {
    gentleHint.textContent = 'Кликни снова, чтобы скрыть.';
    if (!popup.contains(imageWrapper)) {
      innerImage.src = popup.dataset.image;
      popup.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) {
        imageWrapper.classList.add('visualised');
      }
    } else {imageWrapper.classList.toggle('visualised')}
  }
};
closedButton.onclick = function() {
  imageWrapper.classList.toggle('visualised');
};


