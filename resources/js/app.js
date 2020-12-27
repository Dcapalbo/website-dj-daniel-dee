
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
    modalContactBg.classList.add('bg_active');
});

// make an event click function to delete the class active
closeContact.addEventListener('click', function() {
    modalContactBg.classList.remove('bg_active');
});
// make a bio button event click function to add the class active
modalBioBtn.addEventListener('click', function() {
    modalBioBg.classList.add('bg_active');
}); 

// make an event click function to delete the class active
closeBio.addEventListener('click', function() {
    modalBioBg.classList.remove('bg_active');
});

// make a tour button event click function to add the class active
modalTourBtn.addEventListener('click', function (){
    modalTourBg.classList.add('bg_active');
});

// make an event click function to delete the class active
closeTour.addEventListener('click', function() {
    modalTourBg.classList.remove('bg_active');
});

// make a scroll function for mix section
function mixScroll() {
    elmMix = document.getElementById('landing_mix');
    topMixPos = elmMix.offsetTop;
} 

// event listener to scroll the page to the mix voice 
mix = document.querySelector('.mix');
mix.addEventListener('click', function() {
    mix = elmMix.scrollTop;
});

// make a scroll function for music section
function musicScroll() {
    elmMusic = document.getElementById('landing_music');
    topMusicPos = elmMusic.offsetTop;
} 

// event listener to scroll the page to the mix voice 
music = document.querySelector('.music');
music.addEventListener('click', function() {
    music = elmMusic.scrollTop;
});

// Invoke the mix and music functions 
mixScroll();
musicScroll();

// console logs 
console.log(topMixPos);
console.log(topMusicPos);

