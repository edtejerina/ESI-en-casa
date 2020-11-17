// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event){
  event.preventDefault();
  this.classList.toggle('is-active');
  document.querySelector( ".nav" ).classList.toggle("is-active");
}

// event
menu.addEventListener('click', toggleMenu, false);
