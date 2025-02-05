$(document).ready(function () {
    // WINDOW SCROLL
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        $("body").toggleClass("fixed-header", scrollTop >= 100);
    });

    // SCROLL REVEAL CONFIG
    var sr = ScrollReveal({
        reset: true,
        distance: "80px",
        duration: 2500,
        delay: 200
    });

    sr.reveal(".home-content img", { origin: "top" });
    sr.reveal(".heading", { origin: "bottom" });
    sr.reveal(".atendimento-img, .escritorio-img", { origin: "left" });
    sr.reveal(".atendimento-content p, .escritorio-content p", { origin: "right" });
    sr.reveal(".about", { origin: "top" });

    // AVISO IMPORTANTE (Sempre visível)
    var aviso = document.getElementById("aviso-importante");
    var fecharAviso = document.getElementById("fechar-aviso");
    var iconeAviso = document.getElementById("icone-aviso");

    if (aviso && fecharAviso && iconeAviso) {
        aviso.style.display = "flex";
        iconeAviso.style.display = "none";

        fecharAviso.addEventListener("click", function () {
            aviso.style.display = "none";
            iconeAviso.style.display = "block";
        });

        iconeAviso.addEventListener("click", function () {
            aviso.style.display = "flex";
            iconeAviso.style.display = "none";
        });
    }

    // SCROLL IT
    if ($.scrollIt) {
        $.scrollIt({
            easing: "linear",
            topOffset: -70
        });
    }
});


