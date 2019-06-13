
var nav = document.getElementById("navbar");
// Test
var navMobile = document.getElementById("mobile-nav")
if (window.innerWidth >= 700) {
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            nav.style.background = "#181c1f";
            nav.style.opacity = ".9";
        } else {
            nav.style.background = "transparent";
            nav.style.boxShadow = "none";
        }
    }
}

if (window.innerWidth < 700) {
    nav.style.transition = "none !important";
    nav.style.transform = "translateX(100%)";
    nav.style.transition = "0.5s ease-in";
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            nav.style.paddingTop = "0vh"
            nav.style.top = "6vh"
            navMobile.style.background = "#181c1f";
            navMobile.style.opacity = ".9";
        } else {
            nav.style.paddingTop = "6vh"
            nav.style.top = "0vh"
            navMobile.style.background = "transparent";
            navMobile.style.boxShadow = "none";
        }
    }
}

function burgerClick() {
    if (window.innerWidth < 700) {
        if (nav.style.transform == "translateX(100%)") {
            nav.style.transform = "translateX(0%)"
        } else {
            nav.style.transform = "translateX(100%)"
        }
    }
}

function listClick() {
    if (window.innerWidth < 700) {
        nav.style.transform = "translateX(100%)"
    }
}


