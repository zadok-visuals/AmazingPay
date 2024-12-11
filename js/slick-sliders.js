var $bannerSlider = jQuery('.banner-slider');
	var $bannerFirstSlide = $('div.banner-slide:first-child');

	$bannerSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
		slideanimate($firstAnimatingElements);
	});
	$bannerSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		slideanimate($animatingElements);
	});

	$bannerSlider.slick({
		dots: true,
		fade: true,
		autoplay: true,
		prevArrow: false,
		nextArrow: false,
		autoplaySpeed: 3500,
		pauseOnHover:false,
		speed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		adaptiveHeight: true,
		appendDots:$('.banner-dots')
	});

	function slideanimate(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}

	$('.career-slider-container').slick({
		dots: true,
		scroll: true,
		autoplay: true,
		prevArrow: false,
		nextArrow: false,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		adaptiveHeight: true,
	});

	$(".main-card-slider").slick({
		centerMode: true,
		autoplay: true,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: true,
		speed: 1200,
		infinite: true,
		dots: true,

		responsive: [{
			breakpoint: 880,
			settings: {
				centerMode: true,
				autoplay: true,
				centerPadding: '0px',
				slidesToScroll: 1,
				draggable: true,
				speed: 800,
				infinite: true,
				slidesToShow: 2,
				dots: true,
				arrows: false,
			}
		},
		{
		breakpoint: 520,
		settings: {
			arrows: true,
			centerMode: true,
			slidesToShow: 1,
			dots: true,
		}
		}]
	});

	$(".three-icon-container").slick({
		slidesToShow: 3,

		responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: true,
				autoplay: true,
				dots: true,
				centerPadding: '0px',
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
				speed: 1200,
				infinite: true,
			}
		}]
	});

	if (window.matchMedia("(max-width: 768px)").matches) {
	/* the viewport is less than 768 pixels wide */
		$(".main-news-container").slick({
			dots: true,
			fade: true,
			autoplay: true,
			prevArrow: false,
			nextArrow: false,
			speed: 1300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			adaptiveHeight: true,
	
		});
	} 

$('.people-slider').slick({
	centerMode: false,
	autoplay: false,
	centerPadding: '0px',
	draggable: true,
	slidesToShow: 4,
	infinite: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 3,

				dots: true,
			}
		},
		{
		breakpoint: 768,
				settings: {
					centerMode: false,
					autoplay: true,
					speed: 900,
					slidesToScroll: 1,
					slidesToShow: 2,
					dots: true,
				}
		},
		{
			breakpoint: 520,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1,

				dots: true,
			}
		}

],

});

$('.pachi-slider').slick({
	centerMode: true,
	autoplay: true,
	centerPadding: '0px',
	draggable: true,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 3,
			
			}
		},
		{
		breakpoint: 1000,
					settings: {
		
						autoplay: true,
						speed: 900,
						slidesToScroll: 1,
						slidesToShow: 2,
						dots: true,
					}
		},
		{
		breakpoint: 768,
				settings: {
	
					autoplay: true,
					speed: 900,
					slidesToScroll: 1,
					slidesToShow: 1,
					dots: true,
				}
		},
		{
			breakpoint: 520,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1,

				dots: true,
			}
		}

],

});

$('#yello-partners').slick({
	centerMode:false,
	arrows:false,
	slidesToShow:2,
	dots:false,
	responsive: [
	{
		breakpoint: 520,
		settings: {
			arrows: true,
			centerMode: false,
			slidesToShow: 1,
			adaptiveHeight:true,
			dots: true,
		}
	}
	]
});

$('#pachi-stats').slick({
	centerMode:false,
	arrows:false,
	slidesToShow:3,
	dots:true,
	responsive: [
	{

		breakpoint: 1180,
		settings: {
			arrows: true,
			centerMode: false,
			slidesToShow: 2,
			adaptiveHeight:true,
			dots: true,
		},
	},

	{

		breakpoint: 768,
		settings: {
			arrows: true,
			centerMode: false,
			slidesToShow: 1,
			adaptiveHeight:true,
			dots: true,
		}
	}
	]
});

$('.icons-slider').slick({
	autoplay: true,
	centerPadding: '0px',
	draggable: true,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				slidesToShow: 2,
				dots: true,
			},
		},
		{
			breakpoint: 880,
			settings: {
				autoplay: true,
				speed: 900,
				slidesToShow: 2,
				arrows: false,
			},
		},
		{
			breakpoint: 768,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				arrows: false,
			},
		},
	],
});