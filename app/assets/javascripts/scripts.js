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



/*------------------------------------*\
    #TOOLTIPS
\*------------------------------------*/

$(document).ready(function() {
	$('.tooltips').tooltip();
})



/*------------------------------------*\
    #SCROLL ANCHOR
\*------------------------------------*/

$(document).ready(function() {
	smoothScroll.init({speed: 1200, easing: 'easeInOutCubic', updateURL: false});
});




/*------------------------------------*\
    #VIDEOS RESPONSIVE
\*------------------------------------*/

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();
  });


