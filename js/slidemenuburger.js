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


// HOME SECTION

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
});

