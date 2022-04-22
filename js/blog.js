/* js */
/* global */
history.scrollRestoration = "manual"
document.oncontextmenu = function () { return false; }

/* page load */
window.onload = function () {
    $("body").removeClass("loading");
    $("body").addClass("loaded");
};

/* scroll indicator */
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

/* scroll to top */
function topFunction() {
    $("html,body").animate({ scrollTop: 0 }, 300);
}

/* progress bar */
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

/* includeHTML */
function includeHTML(callback) {
    var z, i, elmnt, file, xhr;
    /* loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* search for elements with a certain atrribute: */
        file = elmnt.getAttribute("include-html");
        //console.log(file);
        if (file) {
            /* make an HTTP request using the attribute value as the file name: */
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML(callback);
                }
            };
            xhr.open("GET", file, true);
            xhr.send();
            /* exit the function: */
            return;
        }
    }
    setTimeout(function () {
        //callback();
    }, 0);
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