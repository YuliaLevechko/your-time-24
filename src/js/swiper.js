const swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 0,
loop: true,
keyboard: {
enabled: true,
},
navigation: {
nextEl: ".button-next",
prevEl: ".button-prev",
},
});