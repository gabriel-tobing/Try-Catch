/* Script Navbar on Scroll */

window.addEventListener("scroll", function() {
    const navbarEl = document.getElementById("navbar");

    navbarEl.classList.toggle("scroll", window.scrollY > 0)
});