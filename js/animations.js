$(document).ready(function($) {
    $("li a").click(function() {
        var scroll = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll).offset().top
        }, 2000);
        return false;
    });
    $('#jumbo-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000, 'swing');
    });
});
