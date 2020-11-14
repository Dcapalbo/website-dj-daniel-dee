const { event } = require('jquery');
const { get } = require('lodash');

require('./bootstrap');

// make buttons and bg variables
var modalTourBtn = document.querySelector('.modal_tour_bg');
var modalContactBtn = document.querySelector('.modal_contact_button');
var modalBioBtn = document.querySelector('.modal_bio_button');
var modalBg = document.querySelector('.modal_bg');
var modalClose = document.querySelector('.fa-times');

// make a contact button event click function to add the class active
modalContactBtn.addEventListener('click', function() {
    modalBg.classList.add('.bg_active');
}); 

// make an event click function to delete the class active
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('.bg_active');
});

// make a bio button event click function to add the class active
modalBioBtn.addEventListener('click', function() {
    modalBg.classList.add('.bg_active');
}); 

// make an event click function to delete the class active
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('.bg_active');
});

// make a tour button event click function to add the class active
modalTourBtn.addEventListener('click', function (){
    modalBg.classList.add('bg_active');
});

// make an event click function to delete the class active
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('.bg_active');
});

