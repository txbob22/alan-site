$(document).ready(function($) {
    $('#jumbo-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 2000, 'swing');
    });
});
