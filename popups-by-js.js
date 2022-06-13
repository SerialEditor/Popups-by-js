'use strict';
let popups = document.querySelectorAll('div');
let btns = document.querySelectorAll('button');
for (let popup of popups) {
  popup.onclick = function() {
    popup.textContent = '3';
  }
};

for (let btn of btns) {
  popup.textContent = '';
}
