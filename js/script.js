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
            scrollTop: $('#info').offset().top
        }, 900);
    });



    $(".homepage").click(function() {
        // $('#home').show();
        // $('#info').hide();
    });

    $(".fact1").click(function() {
        // $('#info').show('slide', {direction: 'up'},1000);
        // $('#home').show('slide', {direction: 'up'},1000);

    });

    var wave1 = $('#feel-the-wave').wavify({
        height: 10,
        bones: 3,
        amplitude: 60,
        color: '#AEE4D9',
        speed: .15
    });

    var wave2 = $('#feel-the-wave-two').wavify({
        height: 40,
        bones: 2,
        amplitude: 90,
        color: '#87D8C9',
        speed: .25
    });
    var wave2 = $('#feel-the-wave-three').wavify({
        height: 200,
        bones: 4,
        amplitude: 60,
        color: '#75D6C5',
        speed: .25
    });


    // $(document).on('scroll', function() {
    //     $(".globalwarming").css("opacity", Math.max(1 - 0.01*window.scrollY, 1));
    //     $(".greenhouseeffect").css("opacity", Math.max(1 - 0.01*window.scrollY, 1));
    // })




});

$(document).scroll(function() {

    var y = $(document).scrollTop();
    $().html(y);
    if (y >1000 && y > 200){
        $(".globalwarming").fadeOut();
    }
    else{
        $(".globalwarming").fadeIn();
    }

    if (y <900) {
        $(".greenhouseeffect").fadeIn()
    }
    else {
        $(".greenhouseeffect").fadeOut()
    }
});