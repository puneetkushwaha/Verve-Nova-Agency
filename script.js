// Smooth Scrolling for Navigation
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
      const target = this.getAttribute('onclick').split("'")[1];
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('nav a');

  if (window.scrollY > 0) {
      header.style.backgroundColor = 'black'; // Set background to black

      navLinks.forEach(link => {
          link.style.color = 'white'; // Set nav links color to white
      });
  } else {
      header.style.backgroundColor = 'transparent'; // Reset background to white

      navLinks.forEach(link => {
          link.style.color = 'white'; // Reset nav links color to black
      });
  }
});


// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});
// Set up the Intersection Observer to trigger visibility
const aboutSection = document.querySelector('.about');
const partnerSection = document.querySelector('.partner');

// Observer options
const options = {
  root: null,  // observing relative to the viewport
  threshold: 0.3,  // trigger when 30% of the section is in view
};

// Intersection Observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add class when section is in view
    }
  });
};

// Create Intersection Observers for the sections
const observer = new IntersectionObserver(observerCallback, options);

// Observe the about and partner sections
observer.observe(aboutSection);
observer.observe(partnerSection);
