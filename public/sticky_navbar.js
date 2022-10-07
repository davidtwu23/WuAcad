
// this javascript defines the behavior of a sticky navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

if(navbar==null){
  navbar = document.getElementById("navbar-search");
}

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}