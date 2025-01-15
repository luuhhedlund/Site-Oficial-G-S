// WINDOW SCROLL
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById('loadMore');
    const blogContainer = document.getElementById('blogContainer');
    const cards = blogContainer.querySelectorAll('.card');
    let currentCardCount = 4; 

    function updateCardDisplay() {
        cards.forEach((card, index) => {
            if (index < currentCardCount) {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none';
            }
        });
    }

    updateCardDisplay();

    loadMoreButton.addEventListener('click', () => {
        currentCardCount += 4;

        updateCardDisplay(); 

        if (currentCardCount >= cards.length) {
            loadMoreButton.style.display = 'none';
        }
    });
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.home-content img', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'bottom' });

$.scrollIt({
    easing: 'linear',
    topOffset: -70
});