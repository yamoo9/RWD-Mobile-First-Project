define(['jquery'], function($) {
	'use strict';
	var $doc = $(document);
	return function(page, grid) {
		try {
			var $page = $(page);
			$doc.on('keydown', function(e) {
				var key = e.keyCode || e.which;
				if (key === 71 && e.shiftKey === true) {
					$page.toggleClass(grid);
				}
			});
		} catch(e) {
			console.error(e);
		}
	};
});