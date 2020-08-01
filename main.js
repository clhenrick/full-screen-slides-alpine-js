function navigationControls() {
  return {
    dispatcher: null,

    next() {
      this.dispatch("next");
    },

    previous() {
      this.dispatch("previous");
    },

    dispatch(direction) {
      this.dispatcher(`go-${direction}-slide`);
    },
  };
}

function slidesContainer() {
  return {
    slideIndex: 0,
    slides: [],

    nextSlide() {
      const idx = this.slides.findIndex((slide) =>
        slide.classList.contains("active")
      );
      if (idx !== -1 && idx + 1 < this.slides.length) {
        this.goToSlide(idx + 1);
      }
    },

    previousSlide() {
      const idx = this.slides.findIndex((slide) =>
        slide.classList.contains("active")
      );
      if (idx !== -1 && idx - 1 >= 0) {
        this.goToSlide(idx - 1);
      }
    },

    goToSlide(index) {
      const nextSlide = this.slides[index];
      if (nextSlide) {
        this.slides.forEach((slide) => slide.classList.remove("active"));
        nextSlide.scrollIntoView({ behavior: "smooth" });
        nextSlide.classList.add("active");
      }
    },
  };
}
