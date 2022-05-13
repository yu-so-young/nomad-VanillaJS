function handleWindowResize() {
  const windowSize = window.innerWidth;
  if(windowSize <= 300) {
    body.className = "narrow";
  }
  else if(windowSize >= 800) {
    body.className = "wide";
  }
  else {
    body.className = "default";
  }
  
};

alert("haha");
const body = document.body;
window.addEventListener("resize", handleWindowResize)