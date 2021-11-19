"use strict";
$(document).ready(function(){
	$('.grid').isotope({
		itemSelector: '.grid-item'
	});
	AOS.init();
});