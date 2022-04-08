(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();



    /* ==========================================================================
    countdown timer
    ========================================================================== */
     jQuery('#clock').countdown('2020/07/20',function(event){
      //  console.log('clock function runnig');
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });


 

  });      

}(jQuery));