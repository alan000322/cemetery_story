window.addEventListener("scroll", function() {
    var scrolled = window.pageYOffset;
    var textElement = document.querySelector(".container");
    textElement.style.transform = "translateY(" + scrolled + "px)";
  });
  