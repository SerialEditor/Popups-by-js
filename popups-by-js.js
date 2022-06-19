'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let closedButton = document.querySelector('.closing-button');
let openState = true;
let gentleHint = document.querySelector('.prompt');
for (let popup of popups) {
  popup.onclick = function() {
    gentleHint.textContent = 'Кликни по кнопке, чтобы скрыть.';
    if (!popup.contains(imageWrapper)) {
      innerImage.src = popup.dataset.image;
      popup.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) { 
        imageWrapper.classList.add('visualised'); 
      }
    } else if (openState == false) {
      imageWrapper.classList.add('visualised');
      openState = true;
    }
  }
};
closedButton.onclick = function() {
  if (openState == true) {
    imageWrapper.classList.remove('visualised');
    openState = false;
};


