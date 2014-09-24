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
    #PRELOAD IMAGES
\*------------------------------------*/





$(document).ready(function(){
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("monthmentor_logo_white.png","monthmentor_logo.png");


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



var ctx = $("#save_chart").get(0).getContext("2d");

var data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
       {
           label: "My First dataset",
           fillColor: "rgba(220,220,220,0.2)",
           strokeColor: "rgba(220,220,220,1)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(220,220,220,1)",
           data: [65, 59, 80, 81, 56, 55, 40]
       },
       {
           label: "My Second dataset",
           fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(151,187,205,1)",
           pointColor: "rgba(151,187,205,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(151,187,205,1)",
           data: [28, 48, 40, 19, 86, 27, 90]
       }
   ]
};

var myLineChart = new Chart(ctx).Line(data, {});






var ctx = $("#referrals_chart").get(0).getContext("2d");

var data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
       {
           label: "My First dataset",
           fillColor: "rgba(220,220,220,0.2)",
           strokeColor: "rgba(220,220,220,1)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(220,220,220,1)",
           data: [65, 59, 80, 81, 56, 55, 40]
       },
       {
           label: "My Second dataset",
           fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(151,187,205,1)",
           pointColor: "rgba(151,187,205,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(151,187,205,1)",
           data: [28, 48, 40, 19, 86, 27, 90]
       }
   ]
};

var myLineChart = new Chart(ctx).Line(data, {});



var ctx = $("#engagement_chart").get(0).getContext("2d");

var data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
       {
           label: "My First dataset",
           fillColor: "rgba(220,220,220,0.2)",
           strokeColor: "rgba(220,220,220,1)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(220,220,220,1)",
           data: [65, 59, 80, 81, 56, 55, 40]
       },
       {
           label: "My Second dataset",
           fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(151,187,205,1)",
           pointColor: "rgba(151,187,205,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(151,187,205,1)",
           data: [28, 48, 40, 19, 86, 27, 90]
       }
   ]
};

var myLineChart = new Chart(ctx).Line(data, {});


/*------------------------------------*\
    #FIXED NAVBAR
\*------------------------------------*/




     
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
  
$(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('header').css('background-color', '#fffff9').css('border-top', '1px solid #edede8').css('border-bottom', '1px solid #edede8');
          $('.logo-ir').css("background-image", "url(assets/monthmentor_logo.png)");
       } else {
          $('header').css('background-color', 'transparent').css('border-top', 'none').css('border-bottom', 'none');
          $('.logo-ir').css("background-image", "url(assets/monthmentor_logo_white.png)");
       }
});




/* Document Ready */
  });



