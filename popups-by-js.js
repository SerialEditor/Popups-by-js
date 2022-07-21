'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let innerValie = document.querySelector('.inner-value');
let rightValue = document.querySelector('.right-value');

getInnerValue();

function updateDisplay() {
  if (pageLink.classList.contains('visualised')) {
    pageLink.classList.remove('visualised');
  }
  getInnerValue();
  rightValue.textContent = 0;
};

function getInnerValue() {
  innerValue.textContent = Math.trunc(window.innerWidth);
}

/* window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.image-pointer')) {
    gentleHint.textContent = 'Да не сюда!';
  }
}) 
*/

window.addEventListener('resize', getInnerValue);

for (let pointer of pointers) {
  pointer.onclick = function() {
    if (!pointer.contains(pageLink)) {
      innerImage.src = pointer.dataset.image;
      pointer.append(pageLink);
      if (!pageLink.classList.contains('visualised')) {
        pageLink.classList.add('visualised');
      }
    } else {pageLink.classList.toggle('visualised');}
    rightValue.textContent = Math.trunc(pageLink.getBoundingClientRect().right);
  }
};

window.onblur = function() {
   updateDisplay();
};






