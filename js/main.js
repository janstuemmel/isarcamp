var overflow = document.getElementsByClassName('overflow-x-auto');

for (var i=0; i<overflow.length; i++) {
  overflow[i].addEventListener("wheel", scrollX, { passive: false });
}

function scrollX(e) {
  e.preventDefault();
  this.scrollLeft -= -e.deltaY*10;
}
