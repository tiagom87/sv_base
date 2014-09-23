/**
 * CONTENTS
 * 
 * VARIABLES
 * .....................SCSS Useful Variables
 *
 * SETTINGS
 * Global...............Globally-available variables and config.
 *
 * TOOLS
 * Mixins...............Useful mixins.
 *
 * GENERIC
 * Normalize.css........A level playing field.
 * Box-sizing...........Better default `box-sizing`.
 *
 * BASE
 * Headings.............H1–H6 styles.
 *
 * OBJECTS
 * Wrappers.............Wrapping and constraining elements.
 *
 * COMPONENTS
 * Page-head............The main page header.
 * Page-foot............The main page footer.
 * Buttons..............Button elements.
 *
 * TRUMPS
 * Text.................Text helpers.
 */

$(document).ready(function(){

/*------------------------------------*\
    #TESTIMONIALS CAROUSEL
\*------------------------------------*/


 
  $("#testimonials").owlCarousel({
    autoPlay : 3500,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade",
    navigationText: [
      "<i class='fa fa-angle-left hidden-xs hidden-sm'></i>",
      "<i class='fa fa-angle-right hidden-xs hidden-sm'></i>"
      ]
    
  });
 



/*------------------------------------*\
    #TOOLTIPS
\*------------------------------------*/


	$('.tooltips').tooltip();




/*------------------------------------*\
    #SCROLL ANCHOR
\*------------------------------------*/


	smoothScroll.init({speed: 1200, easing: 'easeInOutCubic', updateURL: false});





/*------------------------------------*\
    #VIDEOS RESPONSIVE
\*------------------------------------*/


    // Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();


/*------------------------------------*\
    #VIEWPORT ANIMATIONS
\*------------------------------------*/


$('.title-animation').on('scrollSpy:enter', function() {
	$(this).addClass("magictime puffIn");
});

// $('.title-animation').on('scrollSpy:exit', function() {
// 	$(this).removeClass("magictime puffIn");
// });

$('.title-animation').scrollSpy();



/*------------------------------------*\
    #CHARTS
\*------------------------------------*/





/* Document Ready */
  });



