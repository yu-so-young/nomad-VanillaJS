// ������ �ʺ� ���� background ������ �޶����� ��������

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
  // �⺻�̶��
  else { 
    change = "default"
  }

  if(change != current) {
    current = change;
  }

  
};

const body = document.body;
window.addEventListener("resize", handleWindowResize)