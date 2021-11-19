"use strict";
jQuery(document).ready(function() {
	var wow_init = {
		init: function() {
			$('.grid').isotope({
				itemSelector: '.grid-item'
			});
			new WOW().init();
		}
	};
    wow_init.init()
});