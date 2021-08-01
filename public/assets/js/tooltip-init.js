"use strict";
$(document).ready(function() {
	var tooltip_init = {
		init: function() {
			$("button").tooltip();
			$("a").tooltip();
			$("input").tooltip();
		}
	};
    tooltip_init.init()
});