'use strict';
let popups = document.querySelectorAll('div');
for (let popup of popups) {
  popup.onclick = function() {
    popup.textContent = '3';
    let closedButton = document.createElement('button');
    document.popup.append(closedButton);
  }
}
