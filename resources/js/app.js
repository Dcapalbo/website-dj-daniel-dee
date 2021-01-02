
const { event } = require('jquery');
const { get } = require('lodash');
require('./bootstrap');

// make buttons and bg variables
// buttons variables
var modalContactBtn = document.querySelector('.modal_contact_button');
var modalBioBtn = document.querySelector('.modal_bio_button');
var modalTourBtn = document.querySelector('.modal_tour_button');
// modal variables
var modalContactBg = document.querySelector('.modal_contact_bg');
var modalBioBg = document.querySelector('.modal_bio_bg');
var modalTourBg = document.querySelector('.modal_tour_bg');
// close buttons variable
var closeContact = document.querySelector('.close_contact');
var closeBio = document.querySelector('.close_bio');
var closeTour = document.querySelector('.close_tour');


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
    var elmPos = elm.getBoundingClientRect().top;
    console.log(elmPos);
    var startPos = window.pageYOffset;
    console.log(startPos);
    var dist = elmPos - startPos;
    console.log(dist);
    var starTime = null;

    function animation(currenTime) {
        if (starTime === null) starTime = currenTime;
        var timeElapsed = currenTime - starTime;
        var run = ease(timeElapsed, startPos, dist, duration);
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
var mix = document.querySelector('.mix');
// define the landing selector of mix 
var landingMix = document.getElementById('landing_mix');
// define music 
var music = document.querySelector('.music');
// define the landing selector of music 
var landingMusic = document.getElementById('landing_music');
// add eventlistener and invoke the smooth function for the landing mix
mix.addEventListener('click', function() {
        smoothScroll(landingMix, 1000);
});
// add eventlistener and invoke the smooth function for the landing music
music.addEventListener('click', function(){
        smoothScroll(landingMusic, 1000);
});
