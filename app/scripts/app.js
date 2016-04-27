// import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import 'bootstrap-styl/js/carousel';
import 'bootstrap-styl/js/transition';
import 'bootstrap-styl/js/collapse';
import 'bootstrap-styl/js/affix';
import 'bootstrap-styl/js/scrollspy';

import blazy from 'blazy';

$(() => {
	// svg4everybody();


	// Stop carousels from autorunning
	$('.carousel').carousel({
		interval: false
	});


	// Add smooth scrolling to all links inside a navbar
	$('#main-nav a').on('click', function (event) {

		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash (#)
		const hash = this.hash;
		// Calculate anchor top offset or 0 if '#'
		const scrollTop = $(hash).offset() && $(hash).offset().top || 0;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
		$('html, body').animate({
			scrollTop
		}, 800, function () {
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});

		// Collapse navigation if open
		$('#main-nav').collapse('hide');
	});


	const navHeight = $('.navigation').outerHeight(true);
	// Automatically affix a navbar
	$('.navigation').affix({offset: {top: $('.header').outerHeight(true) - navHeight}});


	// Scrollspy
	$('body').scrollspy({
		target: '.navbar',
		offset: navHeight
	});


	// Add active class to 'Home' navbar link when scrolled to the top
	$(window).on('scroll', function () {
		if ($(this).scrollTop() < 100) {
			$('#main-nav li').first().addClass('active');
		}
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


	/* global Modernizr */
	if (!Modernizr.placeholder) {
		// IE9 placeholder attribute support
		$('[placeholder]').focus(function () {
			const input = $(this);
			if (input.val() === input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function () {
			const input = $(this);
			if (input.val() === '' || input.val() === input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur().parents('form').submit(function () {
			$(this).find('[placeholder]').each(function () {
				const input = $(this);
				if (input.val() === input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
});
