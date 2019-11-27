const sliderClients = (btnRightSelector, btnLeftSelector, sliderSelector, slidesSelector) => {
  const btnRight = document.querySelector(btnRightSelector);
  const btnLeft = document.querySelector(btnLeftSelector);
  let slidesArr = document.querySelectorAll(slidesSelector);
  const slider = document.querySelector(sliderSelector);
  let currentSlideIndex = 0;

  const nextSlideShow = () => {
    if (currentSlideIndex >= slidesArr.length - 1)
      currentSlideIndex = 0;
    else
      currentSlideIndex++;
  }

  const prevSlideShow = () => {
    if (currentSlideIndex < 1)
      currentSlideIndex = slidesArr.length - 1;
    else
      currentSlideIndex--;
  }

  const changeSlide = () => {
    slider.style.cssText = '-ms-transform: translateX(' + (-33.33 * currentSlideIndex) + '%);transform: translateX(' + (-33.33 * currentSlideIndex) + '%);';
  }
  
  btnRight.addEventListener('click', (e) => {
    nextSlideShow();
    changeSlide();
  });

  btnLeft.addEventListener('click', (e) => {
    prevSlideShow();
    changeSlide();
  });
}

export default sliderClients;