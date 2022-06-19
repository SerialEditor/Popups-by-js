'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let closedButton = document.querySelector('.closed-button');
let gentleHint = document.querySelector('.prompt');
for (let popup of popups) {
  popup.onclick = function() {
    gentleHint.textContent = 'Кликни по кнопке, чтобы скрыть.';
    if (!popup.contains(imageWrapper)) {
      innerImage.src = popup.dataset.image;
      popup.append(imageWrapper);
      imageWrapper.classList.add('visualised');
    }
  }
};
closedButton.onclick = function() {
  imageWrapper.classList.remove('visualised'); 
};


