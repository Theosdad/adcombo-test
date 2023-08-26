let swiperInstance = null;

const initSwiper = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 1024 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  } else if (windowWidth >= 1024 && swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
  }
};
initSwiper();

window.addEventListener('resize', () => {
  initSwiper();
});
