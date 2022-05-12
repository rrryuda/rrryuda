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
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        $("#scrollTop").fadeIn(200);
    } else {
        $("#scrollTop").fadeOut(200);
    }
}

// scroll to top
function topFunction() {
    $("html,body").animate({ scrollTop: 0 }, 300);
}