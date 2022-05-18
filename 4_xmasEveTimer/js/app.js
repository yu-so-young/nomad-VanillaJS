// intervals �� 2�ʸ��� ���� �Ͼ��
// setInterval(function, ms)

// time out 5�� ���Ŀ� �����Ѵ�
// setTimeout(function, ms)

// timeVals

// Date


function showClock() {
    const now = new Date();
    const clock = document.querySelector("h2#clock");
    const xmas = new Date(2022, 11, 25, 0, 0, 0);
  
    const gap = xmas.getTime() - now.getTime(); // ms ����
  
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
  setInterval(showClock, 1000); // 1�ʸ��� �Լ� ����
  