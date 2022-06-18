'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
let innerImage = document.querySelector('.inner-image');
for (let popup of popups) {
  popup.onclick = function() {
    if (!popup.contains(imageWrapper)) {
      popup.append(imageWrapper);
      if (!imageWrapper.classList.contains('visualised')) {
        imageWrapper.classList.add('visualised'); 
      } 
    } else {imageWrapper.classList.toggle('visualised');}
  }
};


