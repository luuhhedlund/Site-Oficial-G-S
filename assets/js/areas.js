// WINDOW SCROLL
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.areas-atuacao-box h3', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'bottom' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});