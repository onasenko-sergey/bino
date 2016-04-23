// import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import 'bootstrap-styl/js/carousel';
import 'bootstrap-styl/js/transition';
import 'bootstrap-styl/js/collapse';

import blazy from 'blazy';

$(() => {
	// svg4everybody();


	// Stop carousels from autorunning
	$('.carousel').carousel({
		interval: false
	});


	// Lazyload images
	const loadOffset = 250;
	/* eslint-disable */
	// add "bg-load-on" class to elements when they are almost visible
	new blazy({
		errorClass: 'bg-load-on',
		offset: loadOffset,
		selector: '.bg-load'
	});

	new blazy({
		offset: loadOffset,
		selector: '.lazy-img'
	});
	/* eslint-enable */
});
