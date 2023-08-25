const burgerButton = document.getElementById('burger-button');
const sidebar = document.querySelector('.sidebar');

export const initBurger = () => {
  burgerButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    burgerButton.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && sidebar.classList.contains('active') && burgerButton.classList.contains('active')) {
      sidebar.classList.remove('active');
      burgerButton.classList.remove('active');
    }
  });
}
