'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
let gentleHint = document.querySelector('.prompt');
for (let popup of popups) {
  popup.onclick = function() {
    gentleHint.textContent = 'Кликни снова по блоку или изображению.';
    if (!popup.contains(imageWrapper)) {
      innerImage.src = popup.dataset.image;
      popup.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) {
        imageWrapper.classList.add('visualised'); 
      } 
    } else {imageWrapper.classList.toggle('visualised');}
  }
};


