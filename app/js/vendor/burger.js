const burderBtn = document.querySelector('.burger-menu');
const navBox = document.querySelector('.menu');


burderBtn.addEventListener('click', () => {
  burderBtn.classList.toggle('burger-menu--visiblle');
  navBox.classList.contains('menu--opened') ? navBox.classList.remove('menu--opened') : navBox.classList.add('menu--opened');
});

navBox.addEventListener('click', (e) => {
  let target = e.target;
  if (!target.classList.contains('menu--opened')) {
    closeMenu();
  }
});

function closeMenu() {
  navBox.classList.remove('menu--opened');
  burderBtn.classList.remove('burger-menu--visiblle');
}