const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullet:true,
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
       slidesPerView: 1
    },
    500:{
       slidesPerView: 2
    },
    800:{
       slidesPerView: 3
    },
    1024:{
       slidesPerView: 5
    }
  }
});

const menuBtn = document.querySelector('.ham-menu');
const menu = document.querySelector('.off-screen-menu');

menuBtn.addEventListener("click",()=>{
  menu.classList.toggle('active');
});