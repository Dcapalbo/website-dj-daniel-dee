/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// make buttons and bg variables
// buttons variables
$(document).ready(function () {
  var modalContactBtn = document.querySelector('.modal_contact_button');
  var modalTourBtn = document.querySelector('.modal_tour_button');
  var modalBioBtn = document.querySelector('.modal_bio_button'); // close buttons variables

  var closeContact = document.querySelector('.close_contact');
  var closeTour = document.querySelector('.close_tour');
  var closeBio = document.querySelector('.close_bio'); // modal variables

  var modalContactBg = document.querySelector('.modal_contact_bg');
  var modalTourBg = document.querySelector('.modal_tour_bg');
  var modalBioBg = document.querySelector('.modal_bio_bg'); // define mix

  var mix = document.querySelector('.mix'); // define the landing selector of mix 

  var landingMix = document.getElementById('landing_mix'); // define music 

  var music = document.querySelector('.music'); // define the landing selector of music 

  var landingMusic = document.getElementById('landing_music'); // make a scroll function to scroll the dom

  function smoothScroll(elm, duration) {
    var elmPos = elm.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var dist = elmPos - startPos;
    var starTime = null;

    function animation(currenTime) {
      if (starTime === null) starTime = currenTime;
      var timeElapsed = currenTime - starTime;
      var run = ease(timeElapsed, startPos, dist, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    } // make an ease function for the smooth effect 


    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  ; // conditions to control the handling inside of the browsers 

  var isSafari = window.safari !== undefined;

  if (isSafari) {
    // make a contact button event click function to add the class active
    $(modalContactBtn).on('click', function () {
      modalContactBg.classList.add('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeContact).on('click', function () {
      modalContactBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // make a bio button event click function to add the class active

    $(modalBioBtn).on('click', function () {
      bFixed = document.querySelector('body');
      modalBioBg.classList.add('bg_active');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeBio).on('click', function () {
      modalBioBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // make a tour button event click function to add the class active

    $(modalTourBtn).on('click', function () {
      bFixed = document.querySelector('body');
      modalTourBg.classList.add('bg_active');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeTour).on('click', function () {
      modalTourBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // add eventlistener and invoke the smooth function for the landing mix

    $(mix).on('click', function () {
      smoothScroll(landingMix, 1000);
    }); // add eventlistener and invoke the smooth function for the landing music

    $(music).on('click', function () {
      smoothScroll(landingMusic, 1000);
    });
  } else {
    // make a contact button event click function to add the class active
    $(modalContactBtn).on('click', function () {
      modalContactBg.classList.add('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeContact).on('click', function () {
      modalContactBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // make a bio button event click function to add the class active

    $(modalBioBtn).on('click', function () {
      bFixed = document.querySelector('body');
      modalBioBg.classList.add('bg_active');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeBio).on('click', function () {
      modalBioBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // make a tour button event click function to add the class active

    $(modalTourBtn).on('click', function () {
      bFixed = document.querySelector('body');
      modalTourBg.classList.add('bg_active');
      bFixed.classList.add('modal_open');
    }); // make an event click function to delete the class active

    $(closeTour).on('click', function () {
      modalTourBg.classList.remove('bg_active');
      bFixed = document.querySelector('body');
      bFixed.classList.remove('modal_open');
    }); // add eventlistener and invoke the smooth function for the landing mix

    $(mix).on('click', function () {
      smoothScroll(landingMix, 1000);
    }); // add eventlistener and invoke the smooth function for the landing music

    $(music).on('click', function () {
      smoothScroll(landingMusic, 1000);
    });
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Domenico/Documents/DOMENICO CAPALBO/BOOLEAN_WEB_DEVELOPER/ATOM/website-dj-daniel-dee/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/Domenico/Documents/DOMENICO CAPALBO/BOOLEAN_WEB_DEVELOPER/ATOM/website-dj-daniel-dee/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });