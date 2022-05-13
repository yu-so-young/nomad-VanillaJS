// ������ �ʺ� ���� background ������ �޶����� ��������

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