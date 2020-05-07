document.addEventListener("DomContentLoaded", function(){

	$(".slider-list").slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		slide: ".slider-item",
		appendArrows: ".slider-arrowss",
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1
					}
				}
			]
	});


})