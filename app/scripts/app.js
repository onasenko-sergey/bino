// import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import 'bootstrap-styl/js/carousel';
import 'bootstrap-styl/js/transition';

$(() => {
	// svg4everybody();

	// Stop carousels from autorunning
	$('.carousel').carousel({
		interval: false
	});
});
