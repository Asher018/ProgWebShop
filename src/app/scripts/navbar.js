function responsiveNavbar() {
    var x = document.getElementById("responsiveNavbar");
    var y = document.getElementsByClassName("menubuttons");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    for (var i = 0; i < y.length; i++) {
        if (y[i].className.substring(y[i].className.length - 7) === "opening") {
            y[i].className = y[i].className.substring(0, y[i].className.length - 8);
        }
        else {
            y[i].className += " opening";
        }
    }
}

function animationX(x) {
    x.classList.toggle("change");
}
