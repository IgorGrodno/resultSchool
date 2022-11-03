function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  slides.forEach((slyde) => {
    slyde.addEventListener("click", () => {
      clearActiveClasses(slides);
      slyde.classList.add("active");
    });
  });

  function clearActiveClasses(arrElements) {
    arrElements.forEach((element) => {
      element.classList.remove("active");
    });
  }
}

slidesPlugin();
