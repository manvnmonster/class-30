(function($){
	'use strict';

// Menu
$('span.alamin-menu-bar').on('click', function(){
	$('.alamin-nav').slideDown();
	$('span.alamin-menu-close').show();
	$(this).hide();
});

$('span.alamin-menu-close').on('click', function(){
	$('.alamin-nav').slideUp();
	$('span.alamin-menu-bar').show();
	$(this).hide();
});

$(window).resize(function(){

	var screenSize = $(window).width();
	if (screenSize > 991) {
		$('.alamin-nav').removeAttr('style');
	}
});

// venobox
new VenoBox();

// isotope
$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});








}) (jQuery);