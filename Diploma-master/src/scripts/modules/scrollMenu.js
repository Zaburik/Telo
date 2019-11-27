const scrollMenu = (containerClass, triggerTag) => {
  const container = document.querySelector(containerClass);

  container.addEventListener('click', e => {
    if(!e.target.getAttribute('href') || e.target.getAttribute('href')[0] !== '#') return;
    
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    if ( e.target.tagName.toLowerCase() === triggerTag && e.target.getAttribute('href') !== '#' && document.querySelector(e.target.getAttribute('href')) !== null) {
      
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
    }
      
  }); 
}

export default scrollMenu;