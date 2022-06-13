'use strict';
let popups = document.querySelector.all('div');
for (let popup of popups) {
  popup.onclick = function {
    popup.textContent = popup.dataset.image;
  }
}
