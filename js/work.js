// js
// global
history.scrollRestoration = "manual"
document.oncontextmenu = function () { return false; }

// page load
window.onload = function () {
    $("body").removeClass("loading");
    $("body").addClass("loaded");
};

// includeHTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

// scroll indicator
window.onscroll = function () { scrollFunction(), myFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        $("#pageTitle").fadeIn(200);
        $("#scrollTop").fadeIn(200);
    } else {
        $("#pageTitle").fadeOut(200);
        $("#scrollTop").fadeOut(200);
    }
}

// scroll to top
function topFunction() {
    $("html,body").animate({ scrollTop: 0 }, 300);
}

// progress bar
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// jquery
// cover
$(document).ready(function () {
    $(window).scroll(function () {
        $('.glass').css("opacity", 0 + $(window).scrollTop() / 400)
    })
})

// image modal
$(function () {
    $(".modal").click(function () {
        var $src = $(this).attr("src");
        $(".zoom .content").fadeIn(100);
        $(".zoom .content .image img").attr("src", $src);
    });
    $(".zoom").click(function () {
        $(".zoom .content").fadeOut(100);
    });
});