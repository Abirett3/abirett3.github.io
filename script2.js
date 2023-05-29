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