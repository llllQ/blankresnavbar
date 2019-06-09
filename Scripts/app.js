const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItem = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('open');
    navItem.forEach(link =>{
        link.classList.toggle('fade');
    })
});
