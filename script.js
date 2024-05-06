
// burgerlinks
function toggleButton() {
  const burger = document.querySelector('.burger');
  const burgerLinks = document.querySelector('.burger-links');

  burger.classList.toggle('active');
  burgerLinks.classList.toggle('active');
}



// const container = document.querySelector('.burger');
// const bars = document.querySelectorAll('.bar');
// const body = document.querySelector('body'); 

// container.addEventListener('click', () => {
//   bars.forEach(bar => bar.classList.toggle('active'));
//   container.classList.toggle('active');
// });



 // Function to update the navbar color based on the current theme
// Function to update the navbar color based on the current theme

let darkColor = '#323232'; 
let lightColor = "#fdf6f8"; 

function updateNavbarColor() {
  const navbar = document.querySelector('.nav-wrapper');
  const introSection = document.querySelector('.intro-section');
  const section1 = document.querySelector('.project-section');
  const section2 = document.querySelector('.about-section');
  const section3 = document.querySelector('.footer');

  const section1Offset = section1.offsetTop;
  const section2Offset = section2.offsetTop;
  const section3Offset = section3.offsetTop;

  const scrollPosition = window.pageYOffset + window.innerHeight / 8;

  const theme = document.documentElement.getAttribute('data-theme');
  const fallbackColor = theme === 'dark' ? darkColor : lightColor;

  if (scrollPosition >= section1Offset && scrollPosition < section2Offset) {
    const section1Color = getComputedStyle(section1).backgroundColor;
    navbar.style.backgroundColor = section1Color !== 'rgba(0, 0, 0, 0)' ? section1Color : fallbackColor;
  } else if (scrollPosition >= section2Offset && scrollPosition < section3Offset) {
    const section2Color = getComputedStyle(section2).backgroundColor;
    navbar.style.backgroundColor = section2Color !== 'rgba(0, 0, 0, 0)' ? section2Color : fallbackColor;
  } else if (scrollPosition >= section3Offset) {
    const section3Color = getComputedStyle(section3).backgroundColor;
    navbar.style.backgroundColor = section3Color !== 'rgba(0, 0, 0, 0)' ? section3Color : fallbackColor;
  } else {
    const introSectionColor = getComputedStyle(introSection).backgroundColor;
    navbar.style.backgroundColor = introSectionColor !== 'rgba(0, 0, 0, 0)' ? introSectionColor : fallbackColor;
  }
}

// Function to change the navbar color instantly based on the current theme and active section
function changeNavbarColorInstantly() {
  const navbar = document.querySelector('.nav-wrapper');
  const theme = document.documentElement.getAttribute('data-theme');
  const fallbackColor = theme === 'dark' ? darkColor : lightColor;
  const currentSection = document.querySelector('.active-section');

  if (currentSection) {
    const sectionColor = getComputedStyle(currentSection).backgroundColor;
    navbar.style.backgroundColor = sectionColor !== 'rgba(0, 0, 0, 0)' ? sectionColor : fallbackColor;
  } else {
    navbar.style.backgroundColor = fallbackColor;
  }
}

// Function to handle theme change
function handleThemeChange() {
  const slider = document.getElementById('checkbox');
  slider.addEventListener('change', function() {
    if (slider.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    changeNavbarColorInstantly();
    updateNavbarColor();
  });
}

// Function to set the initial theme based on the stored preference or browser's default preference
function setInitialTheme() {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const slider = document.getElementById('checkbox');
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || (prefersDarkMode ? 'dark' : 'light');
  
  // Set the initial theme on the document element
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // Update the slider position based on the initial theme
  if (initialTheme === 'dark') {
    slider.checked = true;
  }
  
  // Call the necessary functions to update the navbar color and handle theme change
  changeNavbarColorInstantly();
  updateNavbarColor();
  handleThemeChange();
}

// Function to store the selected theme preference in local storage
function storeThemePreference(theme) {
  localStorage.setItem('theme', theme);
}

// Listen for the theme change event and update the navbar color
document.addEventListener('themeChanged', function() {
  changeNavbarColorInstantly();
  window.requestAnimationFrame(updateNavbarColor);
});

// Call the setInitialTheme function on page load
window.addEventListener('load', setInitialTheme);

// Scroll event listener to update the navbar color while scrolling
window.addEventListener('scroll', updateNavbarColor);

// Call the handleThemeChange function to handle the theme change event
handleThemeChange();

// Function to handle theme change using the slider
function handleSliderChange() {
  const slider = document.getElementById('checkbox');
  slider.addEventListener('change', function() {
    if (slider.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      storeThemePreference('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      storeThemePreference('light');
    }
    changeNavbarColorInstantly();
    updateNavbarColor();
  });
}

// Call the handleSliderChange function to handle the slider change event
handleSliderChange();


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


//Download resume
const downloadBtn = document.getElementById('downloadBtn');
const resumeUrl = 'https://drive.google.com/file/d/1c9MHXoDAsH_WqKPh-f6xdOKuCyUPTaHY/view?usp=sharing';

downloadBtn.addEventListener('click', () => {
  window.location.href = resumeUrl;
});


// Toggle button for Dark and light mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);





// Hamburger Menu Swipe Up 

var initialTouchPosition = null;

function handleTouchStart(event) {
  initialTouchPosition = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (initialTouchPosition === null) {
    return;
  }

  var currentTouchPosition = event.touches[0].clientY;
  var diff = currentTouchPosition - initialTouchPosition;

  if (diff > 0) {
    // Swiped down, do nothing
    return;
  }

  if (diff < -50) {
    // Swiped up, show the hamburger menu
    toggleButton();
    initialTouchPosition = null;
  }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
