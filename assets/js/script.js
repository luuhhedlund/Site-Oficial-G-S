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

ScrollReveal().reveal('.home-content img', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'bottom' });
ScrollReveal().reveal('.atendimento-img', { origin: 'left' });
ScrollReveal().reveal('.atendimento-content p', { origin: 'right' });
ScrollReveal().reveal('.escritorio-img', { origin: 'left' });
ScrollReveal().reveal('.escritorio-content p', { origin: 'right' });
ScrollReveal().reveal('.about', { origin: 'top' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});
