const menuHamburger = document.querySelector(".menu-hamburger")// Indiquer la class de l'image.
const navLinks = document.querySelector(".nav-links")// Indiquer la class des boutons de la nav.
const about = document.querySelector(".about-h1")
const aboutContainer = document.querySelector(".about-container")

// A chaque fois qu'on clique sur la variable menuHamburger, la class "mobile-menu" s'ajoute a la classe nav-links et inversement
menuHamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-menu')
    about.classList.toggle('about-h1-menu')
    aboutContainer.classList.toggle('about-container-menu')
})