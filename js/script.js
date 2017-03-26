function bgScroll() {
    "use strict";
    var bg = document.getElementById("header");
    bg.style.backgroundPositionY = -(window.pageYOffset / 4) + "px";
}
window.addEventListener("scroll", bgScroll, false);