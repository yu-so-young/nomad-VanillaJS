
const HIDDEN_CLASSNAME = "hidden" // 같은 string 을 2번 이상 사용할 때는 저장해서 쓰기, 중요한 정보가 아니니까 그냥 대문자로
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); // element 에서 각 element 가져오기
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작(이 경우엔 새로고침)을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`; // 이게 더 보기 좋아
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // username 은 submit 되었을 때만 생기는 변수

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings 
    paintGreetings(savedUsername);
 }





// 새로고침 안하게 하려면? -> preventDefault
// 모든 EventListener function의 첫번째 argument 는 항상 현재 벌어진 일들에 대한 정보

// form 제출 후 form 이 사라지게 하고 싶다면?
// 1) html element 자체를 없애기
// 2) css 이용

// user를 기억하는 방법은? 새로고침 할 때마다 새로 로그인 해야 하잖아
// form 보여주기 전에 user 가 로그인했는지 안했는지 확인
// local storage 에 user 있으면 form 보여주지 말기
// 어떻게 체크? -> localStorage.getItem()
