
// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//RSVP SECTION

// Get the form elements
const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-form-name');
const optionYes = document.querySelector('.js-rsvp-option[data-value="YES"]');
const optionNo = document.querySelector('.js-rsvp-option[data-value="NO"]');
const dietInput = document.querySelector('.js-form-diet');
const commentsInput = document.querySelector('.js-form-comments');
const submitButton = document.querySelector('.rsvp__submitbutton');

// Set up the event listeners
optionYes.addEventListener('click', () => {
  optionYes.classList.add('is-active');
  optionNo.classList.remove('is-active');
  document.querySelector('.js-rsvp-show').classList.add('is-active');
  submitButton.removeAttribute('disabled');
  submitButton.style.opacity = 1;
});

optionNo.addEventListener('click', () => {
  optionNo.classList.add('is-active');
  optionYes.classList.remove('is-active');
  document.querySelector('.js-rsvp-show').classList.remove('is-active');
  submitButton.removeAttribute('disabled');
  submitButton.style.opacity = 1;
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const attending = optionYes.classList.contains('is-active') || optionNo.classList.contains('is-active');
  const diet = dietInput.value;
  const comments = commentsInput.value;
  if (name && attending) {
    // Send the data to the server using AJAX
    // Display the success message
    form.style.display = 'none';
    document.querySelector('.js-form-success').style.display = 'block';
  }
});
