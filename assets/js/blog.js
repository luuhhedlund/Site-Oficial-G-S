$(document).ready(function () {
    // WINDOW SCROLL
    $(window).on("scroll", function () {
        $("body").toggleClass("fixed-header", $(window).scrollTop() >= 100);
    });

    // BLOG - LOAD MORE
    var loadMoreButton = document.getElementById("loadMore");
    var blogContainer = document.getElementById("blogContainer");

    if (loadMoreButton && blogContainer) {
        var cards = blogContainer.querySelectorAll(".card");
        var currentCardCount = 4;

        function updateCardDisplay() {
            cards.forEach(function (card, index) {
                card.style.display = index < currentCardCount ? "flex" : "none";
            });

            loadMoreButton.style.display = currentCardCount >= cards.length ? "none" : "block";
        }

        updateCardDisplay();

        loadMoreButton.addEventListener("click", function () {
            currentCardCount += 4;
            updateCardDisplay();
        });
    }

    // SCROLL REVEAL CONFIG
    var sr = ScrollReveal({
        reset: true,
        distance: "80px",
        duration: 2500,
        delay: 200
    });

    sr.reveal(".home-content img", { origin: "top" });
    sr.reveal(".heading", { origin: "bottom" });

    // SCROLL IT
    if ($.scrollIt) {
        $.scrollIt({
            easing: "linear",
            topOffset: -70
        });
    }
});
