const partnerSlider = (btnRightSelector, btnLeftSelector, slideSelector, containerSelector) => {
  const btnRight = document.querySelector(btnRightSelector);
  const btnLeft = document.querySelector(btnLeftSelector);
  const container = document.querySelector(containerSelector);
  const slidesArr = document.querySelectorAll(slideSelector);

  let currentSlideIndex = 0;
  let slideWidth = document.querySelector(slideSelector).clientWidth;
  let containerClientWidth = container.clientWidth;
  let slidesToShow = containerClientWidth / slideWidth;

  const changeVariables = () => {
    containerClientWidth = container.clientWidth;
    slideWidth = document.querySelector(slideSelector).clientWidth;
  }

  window.addEventListener('resize', () => {
    if(parseInt(window.innerWidth) <= 768) {
      slidesToShow = 3;
      changeVariables();
    } else {
      slidesToShow = 6;
      changeVariables();
    }
  });

  const nextSlideShow = (slidesToShow) => {
    if (currentSlideIndex === slidesArr.length - slidesToShow)
      currentSlideIndex = 0;
    else
      currentSlideIndex++;
  }

  const prevSlideShow = (slidesToShow) => {
    if (currentSlideIndex < 1)
      currentSlideIndex = slidesArr.length - slidesToShow;
    else
      currentSlideIndex--;
  }

  const changeSlide = () => {
    slidesArr.forEach((item) => {
      item.style.cssText = `
      transform: translateX(-${currentSlideIndex * slideWidth}px);
    `;
    });
  }

  btnRight.addEventListener('click', (e) => {
    nextSlideShow(slidesToShow);
    changeSlide();
  });

  btnLeft.addEventListener('click', (e) => {
    prevSlideShow(slidesToShow);
    changeSlide();
  });
}

export default partnerSlider;