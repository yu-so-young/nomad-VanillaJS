
const HIDDEN_CLASSNAME = "hidden" // ���� string �� 2�� �̻� ����� ���� �����ؼ� ����, �߿��� ������ �ƴϴϱ� �׳� �빮�ڷ�
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); // element ���� �� element ��������
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault(); // �������� �⺻ ����(�� ��쿣 ���ΰ�ħ)�� ������
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`; // �̰� �� ���� ����
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // username �� submit �Ǿ��� ���� ����� ����

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings 
    paintGreetings(savedUsername);
 }





// ���ΰ�ħ ���ϰ� �Ϸ���? -> preventDefault
// ��� EventListener function�� ù��° argument �� �׻� ���� ������ �ϵ鿡 ���� ����

// form ���� �� form �� ������� �ϰ� �ʹٸ�?
// 1) html element ��ü�� ���ֱ�
// 2) css �̿�

// user�� ����ϴ� �����? ���ΰ�ħ �� ������ ���� �α��� �ؾ� ���ݾ�
// form �����ֱ� ���� user �� �α����ߴ��� ���ߴ��� Ȯ��
// local storage �� user ������ form �������� ����
// ��� üũ? -> localStorage.getItem()
