/* js */
/* scroll indicator */
window.onscroll = function () { scrollFunction(), myFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        $(".title, .top").removeClass("is-hidden");
        $(".title, .top").addClass("is-shown");
    } else {
        $(".title, .top").removeClass("is-shown");
        $(".title, .top").addClass("is-hidden");
    }
}
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
function topFunction() {
    $("html,body").animate({ scrollTop: 0 }, 300);
}

/* jquery */
/* cover */
$(document).ready(function () {
    $(window).scroll(function () {
        $('.glass').css("opacity", 0 + $(window).scrollTop() / 400)
    })
})

/* image modal */
$(function () {
    $(".modal").click(function () {
        var $src = $(this).attr("src");
        $(".content-modal").fadeIn(0);
        $(".img-modal img").attr("src", $src);
    });
    $(".img-modal, .content-modal-overlay").click(function () {
        $(".content-modal").fadeOut(0);
    });
});