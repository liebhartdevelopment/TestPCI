(function($) {
	'use strict';

	/*
	 * Creative Header @ Left Side Menu
	 */
	var cHeader = 'body:not(.header-open) #Header_creative';
	var cHeaderEl = jQuery(cHeader);
	var cHeaderCurrent;

	function creativeHeader() {
		jQuery('.creative-menu-toggle').click(function(e) {
			e.preventDefault();
			cHeaderEl.addClass('active');
			if (jQuery('body').hasClass('header-rtl')) {
				cHeaderEl.animate(
					{
						right: -1
					},
					500
				);
			} else {
				cHeaderEl.animate(
					{
						left: -1
					},
					500
				);
			}
			cHeaderEl.find('.creative-wrapper').fadeIn(500);
			cHeaderEl.find('.creative-menu-toggle, .creative-social').fadeOut(500);
		});
	}
	creativeHeader();
	jQuery(document).on('mouseenter', cHeader, function() {
		cHeaderCurrent = 1;
	});
	jQuery(document).on('mouseleave', cHeader, function() {
		cHeaderCurrent = null;
		setTimeout(function() {
			if (!cHeaderCurrent) {
				cHeaderEl.removeClass('active');
				if (jQuery('body').hasClass('header-rtl')) {
					cHeaderEl.animate(
						{
							right: -200
						},
						500
					);
				} else {
					cHeaderEl.animate(
						{
							left: -200
						},
						500
					);
				}
				cHeaderEl.find('.creative-wrapper').fadeOut(500);
				cHeaderEl.find('.creative-menu-toggle, .creative-social').fadeIn(500);
			}
		}, 1000);
	});

	/*
	 *	MFN Demo Panel @ Right Side Menu
	 */
	jQuery(document).ready(function($) {
		jQuery('.masonry.isotope,.isotope').isotope();
		jQuery('#configurator .control').click(function(e) {
			e.preventDefault();
			if (jQuery('#configurator').hasClass('active')) {
				jQuery('#configurator')
					.removeClass('active')
					.animate(
						{
							right: -272
						},
						500
					);
			} else {
				jQuery('#configurator')
					.addClass('active')
					.animate(
						{
							right: -1
						},
						500
					);
			}
		});
		jQuery('#mfn-demo-panel .control').click(function(e) {
			console.log('function ran');
			e.preventDefault();
			if (jQuery('#mfn-demo-panel').hasClass('active')) {
				jQuery('#mfn-demo-panel')
					.removeClass('active')
					.animate(
						{
							right: -367
						},
						500
					);
			} else {
				jQuery('#mfn-demo-panel')
					.addClass('active')
					.animate(
						{
							right: -1
						},
						500
					);
			}
		});
		demosSliderH();
	});
})(jQuery);

function demosSliderH() {
	console.log('called demo slider method');
	var panel = jQuery('#mfn-demo-panel');
	var panelH = panel.height() - panel.find('.header').height();
	jQuery('.demos-slider').height(panelH);
}

// Script for Protex Service Tabs
function openService(evt, service) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the active class
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	// Show current tab, and add an "active" class to the button that opened that tab
	document.getElementById(service).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// Start Protex Central Process Modal

// Start Step One

// Get the modal
var modal = document.getElementsByClassName('modal');
var modal1 = document.getElementById('stepOneModal');
var modal2 = document.getElementById('stepTwoModal');
var modal3 = document.getElementById('stepThreeModal');
var modal4 = document.getElementById('stepFourModal');
// Get the button that opens the modal
var btn1 = document.getElementById('stepOneBtn');
var btn2 = document.getElementById('stepTwoBtn');
var btn3 = document.getElementById('stepThreeBtn');
var btn4 = document.getElementById('stepFourBtn');
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];
var span3 = document.getElementsByClassName('close')[2];
var span4 = document.getElementsByClassName('close')[3];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
	modal1.style.display = 'block';
};
btn2.onclick = function() {
	modal2.style.display = 'block';
};
btn3.onclick = function() {
	modal3.style.display = 'block';
};
btn4.onclick = function() {
	modal4.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
	modal1.style.display = 'none';
};
span2.onclick = function() {
	modal2.style.display = 'none';
};
span3.onclick = function() {
	modal3.style.display = 'none';
};
span4.onclick = function() {
	modal4.style.display = 'none';
};

// End Step One

// End Protex Central Process Modal

// Start Protex Central Floating Contact Form

// Open Floating Contact Form
function openForm() {
	document.getElementById('floatCForm').style.display = 'block';
}

// Close Floating Contact Form
function closeForm() {
	document.getElementById('floatCForm').style.display = 'none';
}

// End Protex Central Floating Contact Form
