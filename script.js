// $(".theme-switch").on("click", () => {
//     $("body").toggleClass("light-theme");
//   });

// burgerlinks


const burgerLinks = document.querySelector('.burger-links');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

toggleButton = () =>
{
  burgerLinks.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('active');
}

// const container = document.querySelector('.burger');
// const bars = document.querySelectorAll('.bar');
// const body = document.querySelector('body'); 

// container.addEventListener('click', () => {
//   bars.forEach(bar => bar.classList.toggle('active'));
//   container.classList.toggle('active');
// });


// Logic for Section visting 

// const navigationHeight = document.querySelector('.nav-wrapper').offsetHeight;
// console.log(navigationHeight); 
// document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px"); 


// Navbar Color change while scrolling

// // Select the navbar element
// const navbar = document.querySelector('.nav-wrapper');

// // Set the desired color for the navbar
// const navbarColor = '#fff';

// // Function to handle scroll event
// function handleScroll() {
//   // Get the vertical scroll position
//   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   // Check if the scroll position is greater than a certain value (e.g., 100 pixels)
//   console.log(scrollPosition);
//   if (scrollPosition > 700) {
//     // Change the navbar color
//     navbar.style.backgroundColor = navbarColor;
//   }
//    else  {
//     // Reset the navbar color
//     navbar.style.backgroundColor = '#fdf6f8';
//   }
// }

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav-wrapper');
  const section1 = document.querySelector('.project-section');
  const section2 = document.querySelector('.about-section');
  const section3 = document.querySelector('.footer-section');

  const section1Offset = section1.offsetTop;
  const section2Offset = section2.offsetTop;
  const section3Offset = section3.offsetTop;

  const scrollPosition = window.pageYOffset + window.innerHeight / 8;
  if (scrollPosition > section1Offset && scrollPosition < section2Offset) {
    navbar.style.backgroundColor = '#fff';
  } else if (scrollPosition > section2Offset && scrollPosition < section3Offset) {
    navbar.style.backgroundColor = '#fdf6f8';
  } else {
    navbar.style.backgroundColor = '#fdf6f8';
  }
});

// Gmail Redirect Logic

function redirectToGmail() {
  var email = "rawatanshul522@gmail.com";
  var subject = "Hello";
  var body = "This is the email body.";

  var url = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(email) +
      "&su=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

  window.open(url, "_blank");
}


// Skills Slider 

// Optional: Add functionality to the skill cloud

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('click', () => {
    // Perform an action when a skill is clicked
    console.log(`Clicked on skill: ${skill.textContent}`);
  });
});



