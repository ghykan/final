$(document).ready(function() {


    $('#logo').mouseenter(function() {
        $('#menu').show('slide',{direction: 'right'},200);
        // $('#menu').fadeIn();
    });
    $('#logo').mouseleave(function() {
        $('#menu').hide('slide',{direction: 'right'},200);
    });
    // $('#logo').fadeOut();


});

$(document).scroll(function() {

    var y = $(document).scrollTop();
    $().html(y);
    if (y > 550){
        $(".farm").fadeIn('slow');
        $(".farm").animate({top: '2px'});
    }
    else {
        $(".farm").fadeOut('slow');
    }


})