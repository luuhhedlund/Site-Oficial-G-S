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

    sr.reveal(".heading", { origin: "top" });
    sr.reveal(".articles h2", { origin: "top" });

    // SCROLL IT
    if ($.scrollIt) {
        $.scrollIt({
            easing: "linear",
            topOffset: -70
        });
    }

    // URL COMPARTILHAMENTO
    var host = window.location.origin;
    var path = window.location.pathname;
    var postUrl = host + path;

    var facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
    var xLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`;
    var linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    var whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(postUrl)}`;

    var facebookShare = document.getElementById("facebook-share");
    var xShare = document.getElementById("x-share");
    var linkedinShare = document.getElementById("linkedin-share");
    var whatsappShare = document.getElementById("whatsapp-share");

    if (facebookShare) facebookShare.href = facebookLink;
    if (xShare) xShare.href = xLink;
    if (linkedinShare) linkedinShare.href = linkedinLink;
    if (whatsappShare) whatsappShare.href = whatsappLink;
});