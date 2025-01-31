document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("navbar");

    var category = window.location.href.toLowerCase().split("/").pop().split(".")[0];

    container.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand fs-1 notranslate" href="index.html">Eric Wolf</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav_bar" aria-controls="main_nav_bar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse comic fs-6 ms-lg-3" id="main_nav_bar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item">
                        <a class="nav-link ${category == "index" ? "active" : ""}" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${category == "projects" ? "active" : ""}" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${category == "education" ? "active" : ""}" href="education.html">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${category == "contact" ? "active" : ""}" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    `;

});

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
