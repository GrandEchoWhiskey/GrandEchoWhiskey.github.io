let windowHeight = 1080
let navbarHeight = 80
let lastKnownScrollPosition = 0;

let ticking = false;
let clicked = false;

$(document).ready(function(){
    windowHeight = $(window).height();
    navbarHeight = $('#navbar').height() + 16;
    $('header').height(windowHeight);
});

$(window).resize(function() {
    windowHeight = $(window).height();
    $('header').height(windowHeight);
});

function scrollOver(){
    window.scrollTo(0, windowHeight - navbarHeight);
}



function addBG(add){
    if(add){
        document.getElementById("navbar").classList.add("bg-dark");
    }else{
        document.getElementById("navbar").classList.remove("bg-dark");
    }
}

document.addEventListener('scroll', function(e){
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function(){
            addBG(lastKnownScrollPosition != 0 || clicked);
        ticking = false;
        });

        ticking = true;
    }
});


$(function(){
    $('#main_nav_bar').on('hidden.bs.collapse', function(){
        clicked = false;
        addBG(false || lastKnownScrollPosition != 0);
    });
});


$(function(){
    $("#main_nav_bar").on('show.bs.collapse', function(){
        clicked = true;
        addBG(true);
    });
});

