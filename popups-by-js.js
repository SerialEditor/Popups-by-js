'use strict';
let pointers = document.querySelectorAll('.image-pointer');
let innerImage = document.querySelector('.inner-image');
let pageLink = document.querySelector('.page-link');
let windowInnerWidth = document.querySelector('.window-inner-width');
let pageWidth = document.querySelector('.page-width');

function getDocumentDimensions() {
  return { 
    viewport: document.documentElement.clientWidth, 
    page: document.documentElement.scrollWidth
  };
}

function showDocumentDimensions() {
  let dimensions = getDocumentDimensions();
  windowInnerWidth.textContent = dimensions.viewport;
  pageWidth.textContent = dimensions.page;
}

function clearDisplay() {
  if (pageLink.classList.contains('visualised')) {
    pageLink.classList.remove('visualised');
  }
};

showDocumentDimensions();

window.addEventListener('resize', showDocumentDimensions); 

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
  }
};







