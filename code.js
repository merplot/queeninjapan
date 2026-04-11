// script.js
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("mySidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
