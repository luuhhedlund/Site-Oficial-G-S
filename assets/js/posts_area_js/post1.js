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


ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.articles h2', { origin: 'top' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});

const host = window.location.origin;
const path = window.location.pathname;

const postUrl = host + path;

const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
const xLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`;
const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(postUrl)}`;

document.getElementById('facebook-share').href = facebookLink;
document.getElementById('x-share').href = xLink;
document.getElementById('linkedin-share').href = linkedinLink;
document.getElementById('whatsapp-share').href = whatsappLink;