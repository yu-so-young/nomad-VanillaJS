function showClock() {
    const now = new Date();
    const clock = document.querySelector("h2#clock");
    
    const Hours = String(now.getHours()).padStart(2, "0");
    const Mins = String(now.getMinutes()).padStart(2, "0");
    const Secs = String(now.getSeconds()).padStart(2, "0");
  
    clock.innerText = `${Hours}h ${Mins}m ${Secs}s`;
  }
  
  showClock();
  setInterval(showClock, 1000); // 1초마다 함수 실행
  