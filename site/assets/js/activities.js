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
  $("#secondfilter").hide();

  $("#spa").click(function(e) {
    e.preventDefault();
    $(".dateeffect").html(shortdates[2]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    $("#firstfilter").show();
    $("#secondfilter").hide();

    // $(".dateeffect").hide();
    updateAllItems("inneractivitydayspa");
  });
  $("#optional").click(function(e) {
    e.preventDefault();
    $(".dateeffect").html(shortdates[3]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    $("#firstfilter").show();
    $("#secondfilter").show();

    // $(".dateeffect").hide();
    updateAllItems("inneractivitydayoptional");
  });

  $("#dayall").click(function(e) {
    e.preventDefault();
    // $(".dateeffect").html(shortdates[4]);
    $(".dateeffect").hide();
    // $(".dateeffect").fadeOut();
    // $(".dateeffect").fadeIn();
    $("#firstfilter").show();
    $("#secondfilter").hide();

    // $(".dateeffect").hide();
    updateAllItems("inneractivity");
  });

  // Generic Method to update all items in the selections no matter how many items
  // Now Adding the code for the fly in text
  function updateAllItems(itemtype) {
    $(".valueitem").each(function() {
      $(this)
        .find("a")
        .attr("href", itemtype + ".asp?id=" + $(this).attr("val"));
    });
  }

  $("#dayalloptional").click(function(e) {
    //e.preventDefault();
    // $(".dateeffect").hide();
    $(".dateeffect").html(shortdates[4]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    $("#firstfilter").show();
    $("#secondfilter").show();
    updateAllItems("inneractivitydayoptional");
  });
  $("#day1").click(function(e) {
    $(".dateeffect").html(shortdates[0]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    //e.preventDefault();
    updateAllItems("inneractivitydayone");
  });
  $("#day2").click(function(e) {
    //e.preventDefault();
    $(".dateeffect").html(shortdates[1]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    updateAllItems("inneractivitydaytwo");
  });
  $("#day3").click(function(e) {
    //e.preventDefault();
    $(".dateeffect").html(shortdates[2]);
    $(".dateeffect").hide();
    $(".dateeffect").fadeOut();
    $(".dateeffect").fadeIn();
    updateAllItems("inneractivitydaythree");
  });

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
    url: "shared/activities/" + idParam + ".htm",
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
