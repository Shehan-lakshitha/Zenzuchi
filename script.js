let menue = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menue.onclick = () => {
    menue.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidePreView: 1,
      },
      770: {
        slidePreView: 2,
      },
      880: {
        slidePreView: 2,
      },
      1120: {
        slidePreView: 4,
      },
    },
  });