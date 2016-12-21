$(document).ready(function() {
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
    });
});

new WOW().init();
