// MY MENU STYLE PSUEDO-CODE

// query the burger button to set it to dissapearing class

// query the button space to change the innerHTML

// store that query in a variable

// set a class in css to make the burger img dissapear

// set a class to be toggled on for the button innerHTML

// set an eventlistener to the wholebutton and write a click function for the query

// toggle the class of the burger img upon the onclick

// change the innerHTML of the button space upon the onclick

// toggle the innerHTML off 

// set the burger position to RELATIVE

// set the close text position to ABSOLUTE

// FOR SLIDE MENU

// query the slide in menu

// toggle the css class to slide in

// For NO SCROLL

// query the body
const bodybody = document.querySelector('.body');


// HOME SECTION MENU BUTTON

// Whole Button
const menubuttonmobile = document.querySelector('.hamburgermobile');

// The Close X
const buttonxmobile = document.querySelector('.mobileclose');

// The Hamburger part
const hamburgermobile = document.querySelector('.mobileburger');

// The Slide In Menu
const slide_in_mobile = document.querySelector('.mobile-nav-home');

// The Top Courdevs Logo
const toplogo = document.querySelector('.logomobile');

// The Nav Courdevs Logo
const menulogo = document.querySelector('.navlogomenu');

// The Logo Background Circle
const logoback = document.querySelector('.backcircle');

// add event listener to the whole button
menubuttonmobile.addEventListener('click', function () {
    // test print
    console.log("You've pressed the Home Menu");
    // make hamburger dissapear
    hamburgermobile.classList.toggle('is-pressed');
    // make button background dissapear
    menubuttonmobile.classList.toggle('is-pressed');
    // make close X appear
    buttonxmobile.classList.toggle('is-shown');
    // bring in the slide in menu
    slide_in_mobile.classList.toggle('slide-in');
    // make top logo dissapear
    toplogo.classList.toggle('dissapear');
    // make nav logo appear
    menulogo.classList.toggle('appear');
    // make background dissapear
    logoback.classList.toggle('dissapear');
    // stop the scroll
    bodybody.classList.toggle('no-scroll');
});

// NAV MENU SELECTIONS HOME PAGE

// HOME HOME SELECTION

// query HOME page selection
const home_menu_home = document.getElementById('home_home');

// add event listener
home_menu_home.addEventListener('click', function () {
    // test print
    console.log("You've pressed Home Home");
    // slide menu away
    // go to the Home section
});

// ABOUT SECTION

// Whole About Button
const menubuttonabout = document.querySelector('.abouthamburgermobile');

// The Close X
const buttonxabout = document.querySelector('.aboutmobileclose');

// The Hamburger
const hamburgerabout = document.querySelector('.aboutmobileburger');

// The Slide In Menu
const slide_in_about = document.querySelector('.mobile-nav-about');

// The Page Title
const abouttitle = document.querySelector('.titleabout');

// add event listener to the whole button
menubuttonabout.addEventListener('click', function () {
    // test print
    console.log("You've pressed the about menu button");
    // make hamburger dissapear
    hamburgerabout.classList.toggle('is-pressed');
    // make button background dissapear
    menubuttonabout.classList.toggle('is-pressed');
    // make the close X appear
    buttonxabout.classList.toggle('is-shown');
    // make the About Title dissapear
    abouttitle.classList.toggle('dissapear');
    // bring in the slide in menu
    slide_in_about.classList.toggle('slide-in');
    // stop the scroll
    bodybody.classList.toggle('no-scroll');
});