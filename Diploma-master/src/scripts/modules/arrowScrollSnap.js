const arrowScrollSnap = (arrowsContainerSelector, arrowSelector) => {

  let arrowsContainer = document.querySelector(arrowsContainerSelector);
  
  arrowsContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(!target.closest(arrowSelector)) return;
 
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    target = target.closest(arrowSelector);

    if(target.getAttribute('href') !== null) {
      document.querySelector(target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
    }
  });
};

export default arrowScrollSnap;