export const initSwiper = () => {
  if (window.innerWidth < 1024) {
    const swiper = new Swiper('.swiper', {
      loop: false,

      pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
      },
    });
  }
}
