'use strict';
let popups = document.querySelectorAll('.image-pointer');
let imageWrapper = document.querySelector('.image-wrapper');
for (let popup of popups) {
  popup.onclick = function() {
    if (!popup.contains(imageWrapper)) {
      popup.append(imageWrapper);
    }
  }
};


