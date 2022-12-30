$(document).ready(function() {
	
	//swiper
  const swiper = new Swiper('.swiper', {
  // Optional parameters

  speed: 1000,
  loop: true,
  autoplay: {
   delay: 1500,
 },
 effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//lightbox效果
lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    }) 
});

