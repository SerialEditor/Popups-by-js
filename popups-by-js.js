'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');

function correctPageLinkPosition() {
  const diff = document.documentElement.clientWidth - document.documentElement.scrollWidth;
  if (diff) {
    pageLink.style.left = diff + 'px';
  } else {pageLink.style.left = 0 + 8 + 'px'}
}

function clearDisplay() {
  if (pageLink.classList.contains('visualised')) {
    pageLink.classList.remove('visualised');
  }
};

/* window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.image-pointer')) {
    clearDisplay();
  }
}) 
*/

window.addEventListener('resize', correctPageLinkPosition);

window.addEventListener('blur', clearDisplay);

for (let pointer of pointers) {
  pointer.onclick = function() {
    if (!pointer.contains(pageLink)) {
      pageLink.href = pointer.dataset.link;
      innerImage.src = pointer.dataset.image;
      pointer.append(pageLink);
      if (!pageLink.classList.contains('visualised')) {
        pageLink.classList.add('visualised');
      }
      correctPageLinkPosition();
    } else {pageLink.classList.toggle('visualised');}
  }
};







