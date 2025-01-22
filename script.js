// script.js

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show button when user scrolls down
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block"; // Show button
  } else {
    backToTopButton.style.display = "none"; // Hide button
  }
};

// Scroll to top when button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};