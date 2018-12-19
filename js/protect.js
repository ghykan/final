$(document).ready(function() {


    $('#logo').mouseenter(function() {
        $('#menu').show('slide',{direction: 'right'},200);
        // $('#menu').fadeIn();
    });
    $('#logo').mouseleave(function() {
        $('#menu').hide('slide',{direction: 'right'},200);
    });
    // $('#logo').fadeOut();



    $(".scrolldown").click(function() {
        // $('#info').show( 'slide', {direction: 'down'},1000);
        $('html, body').animate({
            scrollTop: $('#table').offset().top
        }, 900);
    });

});