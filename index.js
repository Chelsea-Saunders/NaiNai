const images = document.querySelectorAll(".main-button");
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");

images.forEach(function (img) {
  img.addEventListener("click", function() {
    const targetPage = img.getAttribute("data-link");
    window.location.href = targetPage;
  });
});
toggle.addEventListener("click", function() {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});