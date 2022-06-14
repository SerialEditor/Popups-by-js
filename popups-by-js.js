'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
for (let popup of popups) {
  popup.onclick = function() {
    if (!popup.classList.contains('popup-mode-on')) {
      popup.classList.add('popup-mode-on');
      popup.append(imageWrapper);
    } else {popup.classList.remove('popup-mode-on');}
  }
};


