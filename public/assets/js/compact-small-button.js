"use strict";
var compact_small_button = {
    init: function() {
	    $('.sidebar-toggle-btn').click(function(){
	        $('.page-body-wrapper').toggleClass('sidebar-hover')
	        $('.switch').toggleClass('d-none')
	    });
	    $('.switch-state').click(function(){
	        $('.sidebar-toggle-btn').toggleClass('d-none')
	    });
	}
};
jQuery(document).ready(function() {
    compact_small_button.init()
});