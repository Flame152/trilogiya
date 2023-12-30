//Слайдер
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
//<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.our-promotions__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.our-promotions__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 2,
			spaceBetween: 63,
			speed: 1100,
			loop: true,
			grabCursor: true,
			pagination: {
				el: '.our-promotions-pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' + ' \\ ' + '<span class="' + totalClass + '"></span>';
				},
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.our-promotions-button-prev',
				nextEl: '.our-promotions-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				0: {
					allowTouchMove: false,
					spaceBetween: 35,
					direction: "vertical",
					
				},
				768: {
					spaceBetween: 30,
				},

				992: {
					spaceBetween: 63,
				},
				1268: {


				},
			},
		});
	}
}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});