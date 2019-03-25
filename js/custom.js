// PARALAX SCROLLING ON INDEX.HTML

window.addEventListener('scroll', function (e) {
  var scrolled = window.pageYOffset;
  const background = document.querySelector(".p-img");
  var coords = '0% ' + (-(scrolled * 0.2) + 'px');
  background.style.top = coords;
});


// FORM VALIDATION
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// FORM SUBMIT TO GOOGLE SUBMISSION
const scriptURL =
  'https://script.google.com/macros/s/AKfycbwuntyfXsS2dsUeYTl910iP8Mi8LzjtpBzMr8bhBowSObAr7IiE/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})