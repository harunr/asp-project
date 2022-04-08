$(document).ready(function () {
    var shortdates = ["Day 1 - Sunday, October 25", "Day 2- Monday, October 26", "Day 3 - Tuesday, October 27", "Day 4 - Wednesday, October 28", "Day 5 - Thursday, October 29", "Day 6 - Friday, October, October 30"];

    // add the break after the page loads first time only
    

// to load on page load 
$(".dateeffect").html(shortdates[0]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
$(".dateeffect").addClass('tenpxbottom');
    $('#tab1-1').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[0]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });
    $('#tab1-2').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[1]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });
    $('#tab1-3').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[2]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });
    $('#tab1-4').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[3]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });
    $('#tab1-5').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[4]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });
    $('#tab1-6').click(function (e) {
        //e.preventDefault();
        $(".dateeffect").html(shortdates[5]);
        $(".dateeffect").hide();
        $(".dateeffect").fadeOut();
        $(".dateeffect").fadeIn();
        
    });

})