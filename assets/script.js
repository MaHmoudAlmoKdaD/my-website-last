// NAVIGATION BAR 
function menuClicked() {
    if (document.getElementById('menuButton').classList.contains('fa-close')) {
        document.getElementById('menuButton').classList.remove('fa-close');
        document.getElementById('navigation').style.top = '-50vh'

    }
    else {
        document.getElementById('menuButton').classList.add('fa-close');
        document.getElementById('navigation').style.top = '10vh'
    }
}

window.onload = fadeIn;

function fadeIn() {
    var fade = document.getElementById("info");
    var opacity = 0;
    var intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 100);
}
