'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/**
 * Contact Form Script
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxDJF2M4PpjjtTCkSn0CO6jnmsMNQw3xojDtEEk9MtYiNoQ9X9dlHvaOq05CDz_tM8/exec'

    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById('msg')

  

    form.addEventListener('submit', e => {

      e.preventDefault()

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})

        .then(response => {

          msg.innerHTML = "Message Sent!!"

        })

        setTimeout(function() {

          msg.innerHTML = ""

  

        }, 10000)

        form.reset()

        .catch(error => console.error('Error!', error.message))

    })


//-------------- For prevent hacking -----------------

// Disable context menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
 }, false);

 // Disable “Ctrl+Shift+I”, “Ctrl+U” and ”F12 key
 document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode==123) {
   e.stopPropagation();
   e.preventDefault();
  }
 });

// Hiding the javascript file from developer tools source
let scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "assets/js/script.js";
document.body.appendChild(scriptElement);