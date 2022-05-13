// 브라우저 너비에 따라 background 색상이 달라지는 웹페이지

function handleWindowResize() {
  const windowSize = window.innerWidth;
  if(windowSize <= 300) {
    body.classList.add("narrow");
    if(body.classList.contains("wide")) {
      body.classList.remove("wide");
    }
  }
  else if(windowSize >= 800) {
    body.classList.add("wide");
    if(body.classList.contains("narrow")) {
      body.classList.remove("narrow");
    }
  }
  else {
    if(body.classList.contains("narrow")) {
      body.classList.remove("narrow");
    }
    if(body.classList.contains("wide")) {
      body.classList.remove("wide");
    }
  }
  
};

const body = document.body;
window.addEventListener("resize", handleWindowResize)