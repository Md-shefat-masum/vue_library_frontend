"use strict";
var masonry_gallery = {
	init: function() {
		$('.grid').isotope({
			itemSelector: '.grid-item'
		});
	}
};
jQuery(document).ready(function() {
    masonry_gallery.init();
});