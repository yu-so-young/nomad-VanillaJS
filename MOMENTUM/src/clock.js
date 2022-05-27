function showClock() {
    const now = new Date();
    const clock = document.querySelector("h2#clock");
    
    const Year = String(now.getFullYear());
    const Month = String(now.getMonth());
    const Dat = String(now.getDate());
    const Day = String(now.getDay());
    const Hours = String(now.getHours()).padStart(2, "0");
    const Mins = String(now.getMinutes()).padStart(2, "0");
    const Secs = String(now.getSeconds()).padStart(2, "0");
  
    clock.innerText = `${Year}.${Month}.${Dat}.${Day}  ${Hours}h:${Mins}m:${Secs}s`;
  }
  
  showClock();
  setInterval(showClock, 1000); // 1초마다 함수 실행
  