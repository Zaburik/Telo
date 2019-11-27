const scrollSnap = (parentSelector, childrenSelector) => {
  const parent = document.querySelector(parentSelector);
  const childrenArr = document.querySelectorAll(childrenSelector);

  parent.style.cssText = `scroll-snap-type: y mandatory;
                          -ms-scroll-snap-type: mandatory;
                          -o-scroll-snap-type: y mandatory;
                          -moz-scroll-snap-type: y mandatory;
                          -webkit-scroll-snap-type: y mandatory;
                          -webkit-overflow-scrolling: touch;`;

  childrenArr.forEach((section) => {
    section.style.cssText = `scroll-snap-align: start;`;
  });
};


export default scrollSnap;