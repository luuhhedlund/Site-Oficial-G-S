$(document).ready(function () {
    // WINDOW SCROLL
    $(window).on("scroll", function () {
        $("body").toggleClass("fixed-header", $(window).scrollTop() >= 100);
    });

    // SCROLL REVEAL CONFIG
    var sr = ScrollReveal({
        reset: true,
        distance: "80px",
        duration: 2500,
        delay: 200
    });

    sr.reveal(".areas-atuacao-box h3", { origin: "top" });
    sr.reveal(".heading", { origin: "bottom" });

    // SCROLL IT
    if ($.scrollIt) {
        $.scrollIt({
            easing: "linear",
            topOffset: -70
        });
    }
});
