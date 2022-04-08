$(document).ready(function() {
    $(".isotope").imagesLoaded(function() {
      var container = $(".isotope");
  
      container.isotope({
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        transitionDuration: "0.8s"
      });
  
      $(".filter li a").on("click", function() {
        $(".filter li a").removeClass("active");
        $(this).addClass("active");
  
        var selector = $(this).attr("data-filter");
        container.isotope({
          filter: selector
        });
  
        return false;
      });
  
      $(window).resize(function() {
        container.isotope();
      });
    });
    // click the button first
    //    $("#dayall").trigger("click",function(){console.log('click has been fired!')});
  
    var urlParams = new URLSearchParams(window.location.search);
    $.urlParam = function(name) {
      var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );
      if (results == null) {
        return null;
      } else {
        return decodeURI(results[1]) || 0;
      }
    };
  
    var idParam = $.urlParam("id");
  
    // depending on the items passed in the url bar populate the div accordingly
    $.ajax({
      url: "shared/evening/" + idParam + ".htm",
      success: function(result) {
        $("#activitycontentfailed").css({
          visibility: "hidden",
          display: "none"
        });
        $("#activitycontent").html(result);
        $(".images-slider").owlCarousel({
          items: 1,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          smartSpeed: 1200,
          loop: true,
          nav: true,
          navText: false,
          dots: true,
          mouseDrag: true,
          touchDrag: true,
          animateIn: "fadeIn",
          animateOut: "fadeOut"
        });
        $(".activity-slider").owlCarousel({
          items: 4,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          smartSpeed: 1200,
          loop: true,
          margin: 10,
          nav: true,
          navText: false,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsiveClass: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 4
            },
            1000: {
              items: 4
            }
          }
        });
      },
      error: function() {
        $("#activitycontentfailed").css({
          visibility: "visible",
          display: "initial"
        });
      }
    });
  });
  