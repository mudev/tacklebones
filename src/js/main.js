'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {

            $('.slidefront').slick({
            	dots: true,
			  	slidesToShow: 1,
			  	adaptiveHeight: true,
			  	arrows: true,
			  	// fade: true,
			  	speed: 500,
			  	cssEase: 'ease-out',
				//mobile settings
				swipeToSlide: true,
				touchThreshold: 2
			});
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
