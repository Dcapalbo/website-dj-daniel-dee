// make buttons and bg variables
// buttons variables
$(document).ready(function() {
    let modalContactBtn = document.querySelector('.modal_contact_button');
    let modalTourBtn = document.querySelector('.modal_tour_button');
    let modalBioBtn = document.querySelector('.modal_bio_button');
    
    // close buttons variables
    let closeContact = document.querySelector('.close_contact');
    let closeTour = document.querySelector('.close_tour');
    let closeBio = document.querySelector('.close_bio');
    
    // modal variables
    let modalContactBg = document.querySelector('.modal_contact_bg');
    let modalTourBg = document.querySelector('.modal_tour_bg');
    let modalBioBg = document.querySelector('.modal_bio_bg');
    
    // define mix
    let mix = document.querySelector('.mix');
    // define the landing selector of mix 
    let landingMix = document.getElementById('landing_mix');
    // define music 
    let music = document.querySelector('.music');
    // define the landing selector of music 
    let landingMusic = document.getElementById('landing_music');
    
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
    
    // conditions to control the handling inside of the browsers 
    var isSafari = window.safari !== undefined;
    if (isSafari) {
        // make a contact button event click function to add the class active
        $(modalContactBtn).on('click', function() {
            modalContactBg.classList.add('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.add('modal_open');
        });
        // make an event click function to delete the class active
        $(closeContact).on('click', function() {
            modalContactBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // make a bio button event click function to add the class active
        $(modalBioBtn).on('click', function() {
            bFixed = document.querySelector('body');
            modalBioBg.classList.add('bg_active');
            bFixed.classList.add('modal_open');
        }); 
        
        // make an event click function to delete the class active
        $(closeBio).on('click', function() {
            modalBioBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // make a tour button event click function to add the class active
        $(modalTourBtn).on('click', function () {
            bFixed = document.querySelector('body');
            modalTourBg.classList.add('bg_active');
            bFixed.classList.add('modal_open');
        });
        
        // make an event click function to delete the class active
        $(closeTour).on('click', function() {
            modalTourBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // add eventlistener and invoke the smooth function for the landing mix
        $(mix).on('click', function() {
            smoothScroll(landingMix, 1000);
        });
        
        // add eventlistener and invoke the smooth function for the landing music
        $(music).on('click', function(){
            smoothScroll(landingMusic, 1000);
        });
    } else {
        // make a contact button event click function to add the class active
        $(modalContactBtn).on('click', function() {
            modalContactBg.classList.add('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.add('modal_open');
        });
        // make an event click function to delete the class active
        $(closeContact).on('click', function() {
            modalContactBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // make a bio button event click function to add the class active
        $(modalBioBtn).on('click', function() {
            bFixed = document.querySelector('body');
            modalBioBg.classList.add('bg_active');
            bFixed.classList.add('modal_open');
        }); 
        
        // make an event click function to delete the class active
        $(closeBio).on('click', function() {
            modalBioBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // make a tour button event click function to add the class active
        $(modalTourBtn).on('click', function () {
            bFixed = document.querySelector('body');
            modalTourBg.classList.add('bg_active');
            bFixed.classList.add('modal_open');
        });
        
        // make an event click function to delete the class active
        $(closeTour).on('click', function() {
            modalTourBg.classList.remove('bg_active');
            bFixed = document.querySelector('body');
            bFixed.classList.remove('modal_open');
        });
        
        // add eventlistener and invoke the smooth function for the landing mix
        $(mix).on('click', function() {
            smoothScroll(landingMix, 1000);
        });
        
        // add eventlistener and invoke the smooth function for the landing music
        $(music).on('click', function(){
            smoothScroll(landingMusic, 1000);
        });
    }
});
