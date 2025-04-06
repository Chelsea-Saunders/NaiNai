const images = document.querySelectorAll(".main-button");

images.forEach(function (img) {
  img.addEventListener("click", function() {
    const targetPage = img.getAttribute("data-link");
    window.location.href = targetPage;
  });
});