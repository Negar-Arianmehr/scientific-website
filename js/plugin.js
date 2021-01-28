// var jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());

/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
// function checkScroll() {
//     if ($(window).scrollTop() >= 300) {
//         $('.navigation__fixed').addClass('solid');
//     } else {
//         $('.navigation__fixed').removeClass('solid');
//     }
// }


// /*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
window.addEventListener("scroll", function () {
    console.log(window.scrollY)//shows us in console the position of scroll from top

    if (window.scrollY >= 250) {
        nav.classList.add("bg-nav");
        logo.classList.add("header__scroll-logo")
        // document.querySelectorAll(".navigation__link").style.color = "#3e3e3e"
        // document.querySelector(".header__logo-pic").style.height="2.75rem"
        // document.querySelector(".salon-header__collapse-icon").style.top = "0"
        // document.querySelector(".salon-header__list-nav").style.margin="1rem 5.25rem 0 0"
    } else
        nav.classList.remove("bg-nav");
        logo.classList.remove("header__scroll-logo")
})
// $(document).ready(function () {
//     checkScroll();
//     $(window).scroll(checkScroll);
//     $('.navbar-toggler').click(function () {
//         if ($(window).scrollTop() <= 300) {
//             $('nav.navbar').toggleClass('solid-toggle');
//         }
//     });
// });


// /*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
// $(document).ready(function () {
//     checkScroll();
//     $(window).scroll(checkScroll);
//     $('').click(function () {
//         if ($(window).scrollTop() <= 300) {
//             $('nav.navigation').toggleClass('solid-toggle');
//         }
//     });
// });


/*==========not hover for current page==========*/
$('a.navigation__link').hover(function () {
    $('a.current-page').not(this).toggleClass('current-page');
})


/*========== BOUNCING DOWN ARROW ==========*/
// $(document).ready(function () {
//     $(window).scroll(function () {
//         $('.top-scroll').css('opacity', 1 - $(window).scrollTop() / 250);
//     });
// });