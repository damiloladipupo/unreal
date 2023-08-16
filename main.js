var menu = document.querySelector(".navmobile-menu");
var mobilelinks = document.querySelector(".mobile-navigations");

function hamburgerHandler() {
  menu.classList.toggle("showmenu");
  mobilelinks.classList.toggle("show-mobile-navigations");
}
