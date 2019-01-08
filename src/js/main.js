$(document).ready(function(){
	let promoClose = document.querySelector(".header__promo-button"),
			promoElement = document.querySelector(".header__promo");
	promoClose.addEventListener("click", function(evt){
		evt.preventDefault();
		promoElement.classList.add('visually-hidden');
	});	

	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		nav: true,
		navText: ["",""]		
	});
});