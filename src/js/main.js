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
			$(".gmap3").gmap3({
				map:{
		            options:{
		            	center:[50.81211775, -0.10378405],
		            	zoom:17,
		            	mapTypeId: google.maps.MapTypeId.MAP,
		            	mapTypeControl: true,
		            	mapTypeControlOptions: {
		            		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		            	},
		            	navigationControl: true,
		            	scrollwheel: true,
		            	streetViewControl: true
		            }
		        }
		    });
        	$("#test1").gmap3({
        		marker:{
        			latLng:[50.81211775,-0.10378405],
        			options: {
        				icon: new google.maps.MarkerImage("http://gmap3.net/skin/gmap/magicshow.png",
        					new google.maps.Size(32, 37, "px", "px"))
        			}
        		}
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
