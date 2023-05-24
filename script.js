let menue = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menue.onclick = () => {
    menue.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}