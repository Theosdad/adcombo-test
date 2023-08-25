export const initTimer = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    let hours = 0;
    let minutes = 30;
    let seconds = 0;

    const updateDisplay = () => {
      hoursDisplay.textContent = hours.toString().padStart(2, '0');
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }

    const startCountdown = () => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        hours = 0;
        minutes = 30;
        seconds = 0;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours > 0) {
            hours--;
            minutes = 59;
          }
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }

      updateDisplay();
    }

    setInterval(startCountdown, 1000);
    updateDisplay();
  });
}
