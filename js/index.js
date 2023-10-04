const toggler = document.querySelector('#checkbox');
const navbar = document.querySelector('.navbar');
const logoDark = document.querySelector('[data-logo-dark]');
const logoLight = document.querySelector('[data-logo-light]');

const tabLinks = document.querySelectorAll('[data-tab-link]');
const tabs = document.querySelectorAll('.slider');
document.addEventListener('DOMContentLoaded', () => {
  toggler.addEventListener('change', (e) => {
    if (e.target.checked) {
      navbar.style.display = 'flex';
      logoDark.style.display = 'none';
      logoLight.style.display = 'block';
    } else {
      navbar.style.display = 'none';
      logoDark.style.display = 'block';
      logoLight.style.display = 'none';
    }
  });
  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 800) {
      logoLight.style.display = 'none';
      logoDark.style.display = 'block';
    }
  });

  tabLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      let activeLink = document.querySelectorAll('[data-tab-link].active');
      let activeSlider = document.querySelectorAll('.slider.active');

      activeLink[0].classList.remove('active');
      activeSlider[0].classList.remove('active');

      tabs[i].classList.add('active');
      e.target.classList.add('active');
    });
  });
});
