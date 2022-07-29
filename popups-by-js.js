'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let different = document.querySelector('.different');

function getDocumentDimensionsDiff() {
  return (document.documentElement.clientWidth - document.documentElement.scrollWidth); 
}

function showDocumentDimensionsDiff() {
  different.textContent = getDocumentDimensionsDiff();
}

function correctPageLinkPosition() {
    pageLink.style.left = getDocumentDimensionsDiff() + 'px';
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
    } else {pageLink.classList.toggle('visualised');}
    showDocumentDimensionsDiff();
    correctPageLinkPosition();
  }
};







