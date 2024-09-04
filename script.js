// script.js
window.onscroll = function() {fixNav()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function fixNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}
