// STVORNICA - script.js

// Hamburger toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close nav on link click
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-hide partner section if fewer than 3 logos
window.addEventListener("DOMContentLoaded", () => {
  const partners = document.querySelectorAll(".partner-track img");
  const partnerSection = document.getElementById("partners");
  if (partners.length < 3 && partnerSection) {
    partnerSection.style.display = "none";
  }
});

// Optional: Looping slider logic if needed in future
// You can enhance this later with Swiper.js or Splide if needed