const swiper = new Swiper('.swiper-1', {
	loop: true,
	autoplay: {
		delay: 3000,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
