
    const { get } = require('lodash');
    require('./bootstrap'); 
// make buttons and bg variables
// buttons variables
let modalContactBtn = document.querySelector('.modal_contact_button');
let modalBioBtn = document.querySelector('.modal_bio_button');
let modalTourBtn = document.querySelector('.modal_tour_button');
// modal variables
let modalContactBg = document.querySelector('.modal_contact_bg');
let modalBioBg = document.querySelector('.modal_bio_bg');
let modalTourBg = document.querySelector('.modal_tour_bg');
// close buttons variable
let closeContact = document.querySelector('.close_contact');
let closeBio = document.querySelector('.close_bio');
let closeTour = document.querySelector('.close_tour');

// make a contact button event click function to add the class active
modalContactBtn.addEventListener('click', function() {
    bFixed = document.querySelector('body');
    bFixed.classList.add('modal_open');
    modalContactBg.classList.add('bg_active');
});

// make an event click function to delete the class active
closeContact.addEventListener('click', function() {
    bFixed = document.querySelector('body');
    bFixed.classList.remove('modal_open');
    modalContactBg.classList.remove('bg_active');
});
// make a bio button event click function to add the class active
modalBioBtn.addEventListener('click', function() {
    bFixed = document.querySelector('body');
    bFixed.classList.add('modal_open');
    modalBioBg.classList.add('bg_active');
}); 

// make an event click function to delete the class active
closeBio.addEventListener('click', function() {
    bFixed = document.querySelector('body');
    bFixed.classList.remove('modal_open');
    modalBioBg.classList.remove('bg_active');
});

// make a tour button event click function to add the class active
modalTourBtn.addEventListener('click', function () {
    bFixed = document.querySelector('body');
    bFixed.classList.add('modal_open');
    modalTourBg.classList.add('bg_active');
});

// make an event click function to delete the class active
closeTour.addEventListener('click', function() {
    bFixed = document.querySelector('body');
    bFixed.classList.remove('modal_open');
    modalTourBg.classList.remove('bg_active');
});

// make a scroll function to scroll the dom
function smoothScroll(elm, duration) {
    let elmPos = elm.getBoundingClientRect().top;
    let startPos = window.pageYOffset;
    let dist = elmPos - startPos;
    let starTime = null;

    function animation(currenTime) {
        if (starTime === null) starTime = currenTime;
        let timeElapsed = currenTime - starTime;
        let run = ease(timeElapsed, startPos, dist, duration);
        window.scrollTo(0, run);
        if ( timeElapsed < duration) requestAnimationFrame(animation);
    }
    // make an ease function for the smooth effect 
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t --;
        return - c / 2 * (t * (t - 2) -1) +b;
    }
    requestAnimationFrame(animation);
};
// define mix
let mix = document.querySelector('.mix');
// define the landing selector of mix 
let landingMix = document.getElementById('landing_mix');
// define music 
let music = document.querySelector('.music');
// define the landing selector of music 
let landingMusic = document.getElementById('landing_music');
// add eventlistener and invoke the smooth function for the landing mix
mix.addEventListener('click', function() {
        smoothScroll(landingMix, 1000);
});
// add eventlistener and invoke the smooth function for the landing music
music.addEventListener('click', function(){
        smoothScroll(landingMusic, 1000);
});
