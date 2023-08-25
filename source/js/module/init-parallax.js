export const initParallax = () => {
  const leftGroup = document.querySelector('.parallax__left');
  const rightGroup = document.querySelector('.parallax__right');

  document.addEventListener('mousemove', (e) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const translateXLeft = (-screenWidth / 2 + mouseX) * 0.02;
    const translateYLeft = (-screenHeight / 2 + mouseY) * 0.02;
    const translateXRight = (screenWidth / 2 - mouseX) * 0.02;
    const translateYRight = (screenHeight / 2 - mouseY) * 0.02;

    leftGroup.style.transform = `translate(${translateXLeft}px, ${translateYLeft}px)`;
    rightGroup.style.transform = `translate(${translateXRight}px, ${translateYRight}px)`;
  });
};
