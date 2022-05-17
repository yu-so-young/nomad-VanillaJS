// 브라우저 너비에 따라 background 색상이 달라지는 웹페이지

function handleWindowResize() {
  const windowSize = window.innerWidth;
  let change;
  let current = body.className;
  
  if(windowSize <= 300) {
    change = "narrow";

  }
  else if(windowSize >= 800) {
    change = "wide"
  }
  // 기본이라면
  else { 
    change = "default"
  }

  if(change != current) {
    current = change;
  }

  
};

const body = document.body;
window.addEventListener("resize", handleWindowResize)