const showStickyMenu = (menuSelector) => {
  const menu = document.querySelector(menuSelector);
  if (menu === null) return 0;

  window.addEventListener('scroll', () => {
    let bodyCords = document.body.getBoundingClientRect();
    if (bodyCords.y < -150 || bodyCords.top < -150)
      menu.style.display = 'block';
    else
      menu.style.display = 'none';
  });
};

export default showStickyMenu;