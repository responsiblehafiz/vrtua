
(function ($) {
"use strict";



$('.tilt-animate').tilt({
	glare: true,
	maxGlare: .5
})




//>> Sidebar Toggle Js Start <<//
$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
	$(".offcanvas__info").removeClass("info-open");
	$(".offcanvas__overlay").removeClass("overlay-open");
});
$(".sidebar-togglee").on("click", function () {
	$(".offcanvas__info").addClass("info-open");
	$(".offcanvas__overlay").addClass("overlay-open");
});





//>> Body Overlay Js Start <<//
$(".body-overlay").on("click", function () {
	$(".offcanvas__area").removeClass("offcanvas-opened");
	$(".df-search-area").removeClass("opened");
	$(".body-overlay").removeClass("opened");
});





// -----------------------------
//>> Sidebar Toggle Js Start <<//
$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
	$(".offcanvas__info").removeClass("info-open");
	$(".offcanvas__overlay").removeClass("overlay-open");
});
$(".sidebar-toggle").on("click", function () {
	$(".offcanvas__info").addClass("info-open");
	$(".offcanvas__overlay").addClass("overlay-open");
});





//Header Search
if($('.search-box-outer').length) {
	$('.search-box-outer').on('click', function() {
		$('body').addClass('search-active');
	});
	$('.close-search').on('click', function() {
		$('body').removeClass('search-active');
	});
}


// sticky
var wind = $(window);
var sticky = $("#sticky-header");
wind.on("scroll", function () {
var scroll = wind.scrollTop();
if (scroll < 100) {
	sticky.removeClass("sticky");
} else {
	sticky.addClass("sticky");
}
});


	//>> Banner Slider Start <<//
	const heroSection = new Swiper(".hero-section", {
		spaceBetween: 30,
		speed: 1300,
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".array-prev",
			prevEl: ".array-next",
		},

		breakpoints: {
			1199: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});




})(jQuery); // End jQuery



// (function($)
//  {
// "use strict";
// // Author code here
// })(jQuery);


