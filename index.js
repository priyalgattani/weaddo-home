function nameValidater(evt) {
  const inputValue = (evt.which) ? evt.which : evt.keyCode
  if (!(inputValue >= 65 && inputValue <= 93) && (inputValue <= 95 && inputValue <= 120) && (inputValue != 32 && inputValue != 0 && inputValue != 28))
    return false;
  return true;
}

function onlyNumberKey(evt) {
  const ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ACSIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}


// #0
// navigation bar
// coffee form
document.getElementById('coffeeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;

  const fname = document.getElementById('n-fname');
  const lname = document.getElementById('n-lname');
  const email = document.getElementById('n-email1');
  const job = document.getElementById('n-job');
  const company = document.getElementById('n-company');
  const location = document.getElementById('n-location');

  if (fname.value.trim() === '') {
    isValid = false;
    document.getElementById('fname-error').innerText = 'First Name is required.';
  } else if (!validateName(fname.value)) {
    isValid = false;
    document.getElementById('fname-error').innerText = 'Name can contain alphabets only.';
  } else {
    document.getElementById('fname-error').innerText = '';
  }

  if (lname.value.trim() === '') {
    isValid = false;
    document.getElementById('lname-error').innerText = 'Last Name is required.';
  } else if (!validateName(lname.value)) {
    isValid = false;
    document.getElementById('lname-error').innerText = 'Name can contain alphabets only.';
  } else {
    document.getElementById('lname-error').innerText = '';
  }

  if (email.value.trim() === '') {
    isValid = false;
    document.getElementById('email-error').innerText = 'Email is required.';
  } else if (!validateEmail(email.value)) {
    isValid = false;
    document.getElementById('email-error').innerText = 'Invalid email format.';
  } else {
    document.getElementById('email-error').innerText = '';
  }

  if (job.value.trim() === '') {
    isValid = false;
    document.getElementById('job-error').innerText = 'Job Title is required.';
  } else {
    document.getElementById('job-error').innerText = '';
  }

  if (company.value.trim() === '') {
    isValid = false;
    document.getElementById('company-error').innerText = 'Company is required.';
  } else {
    document.getElementById('company-error').innerText = '';
  }

  if (location.value.trim() === '') {
    isValid = false;
    document.getElementById('location-error').innerText = 'Location is required.';
  } else {
    document.getElementById('location-error').innerText = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    window.location.href = 'thankyou.html';
  }
});

function validateName(name) {
  const re = /^[a-zA-Z ]+$/;
  return re.test(String(name).toLowerCase());
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}


// #2
// statistics section
const container = document.getElementById("stats-row");
let valDisplays = document.querySelectorAll(".stats-count-up");
let interval = 2000;

ScrollTrigger.create({
  trigger: container,
  start: `top+=25px bottom`,
  markers: true,
  onEnter: countUp,
  onEnterBack: countUp
});

function countUp() {
  valDisplays.forEach((valDisplay) => {
    let startVal = 0;
    let endVal = parseInt(valDisplay.getAttribute("data-val"));
    let duration = interval/endVal;
    let counter = setInterval(function() {
      startVal += 1;
      valDisplay.textContent = startVal;
      if (startVal == endVal) {
        clearInterval(counter);
      }
    }, duration);
  });
}


// #3
// different industries with stackable boxes
// stackable cards
const cards = gsap.utils.toArray(".card");
const spacer = 30;
const scaleVal = 0.8;

ScrollTrigger.matchMedia({
  // large
  "(min-width: 992px)": function() {
    cards.forEach((card, index) => {

      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top-=80px top+=200px`,
          end: `bottom top+=120px`,
          scrub: true,
          // markers:true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer/2}-80px top+=150px`,
        endTrigger: '.cards',
        end: `bottom top+=120px`,
        pin: true,
        pinSpacing: false,
        // markers:true,
        // id: 'pin',
        invalidateOnRefresh: true,
      });
    });

  },

  // medium
  "(min-width: 576px) and (max-width: 991px)": function() {
    const height = document.querySelector('.stackable-text').offsetHeight;
    console.log(height);
    cards.forEach((card, index) => {

      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top-=height top+=400px`,
          end: `bottom top+=550px`,
          scrub: true,
          // markers:true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer/2}-80px top+=400px`,
        endTrigger: '.cards',
        end: `bottom top+=550px`,
        pin: true,
        pinSpacing: false,
        // markers:true,
        // id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  },

  // small
  "(max-width: 575px) and (min-width: 300px)": function() {
    const height = document.querySelector('.stackable-text').offsetHeight;
    console.log(height);
    cards.forEach((card, index) => {

      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top-=height top+=310px`,
          end: `bottom top+=300px`,
          scrub: true,
          // markers:true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer/2}-80px top+=300px`,
        endTrigger: '.cards',
        end: `bottom top+=300px`,
        pin: true,
        pinSpacing: false,
        // markers:true,
        // id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  }
});


// #5
// martech partners
$('.partners-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



// #6
// martech challenges
let slideIndex = 1;
showSlides(slideIndex);

const autoplayInterval = setInterval(autoSlide, 4000);

function autoSlide() {
  plusSlides(1);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("challengesSlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}



// #7
// insights & opinions
$(document).ready(function() {
  $('.insights-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
});



// footer form
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // If it's the last tab, change the Next button to "Submit"
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  }
  // Run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  var invalidText = x[currentTab].getElementsByClassName("invalid-text")[0];
  invalidText.style.display = "none";

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // show invalid text
      invalidText.style.display = "block";
      // and set the current valid status to false
      valid = false;
    } else {
      // remove invalid class if the field is not empty
      y[i].className = y[i].className.replace(" invalid", "");
    }
  }

  // Additional validation for first name and last name format
  if (currentTab == 0 || currentTab == 1) {
    var name = y[0].value;
    var namePattern = /^[a-zA-Z ]+$/;
    if (!namePattern.test(name)) {
      y[0].className += " invalid";
      invalidText.style.display = "block";
      valid = false;
    }
  }

  // Additional validation for email format
  if (currentTab == 2) {
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailid = y[0].value;
    // var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailformat.test(emailid)) {
      y[0].className += " invalid";
      invalidText.style.display = "block";
      valid = false;
    }
  }

  // Additional validation for phone number format
  if (currentTab == 3) {
    var phone = y[0].value;
    var phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      y[0].className += " invalid";
      invalidText.style.display = "block";
      valid = false;
    }
  }

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
