// intervals 매 2초마다 무언가 일어난다
// setInterval(function, ms)

// time out 5초 이후에 실행한다
// setTimeout(function, ms)

// timeVals

// Date


function showClock() {
    const now = new Date();
    const clock = document.querySelector("h2#clock");
    const xmas = new Date(2022, 11, 25, 0, 0, 0);
  
    const gap = xmas.getTime() - now.getTime(); // ms 단위
  
    const gapDays = Math.ceil(gap / (1000 * 60 * 60 * 24));
    const gapHours = String(
      Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const gapMins = String(
      Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const gapSecs = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, "0");
  
    clock.innerText = `${gapDays}d ${gapHours}h ${gapMins}m ${gapSecs}s`;
  }
  
  showClock();
  setInterval(showClock, 1000); // 1초마다 함수 실행
  