const USERMAX_KEY = "maxnum";
const USERINPUT_KEY = "userinput";

const maxForm = document.querySelector("#game #usermax");
const maxNum = maxForm.querySelector("input");
const userForm = document.querySelector("#game #userinput");
const userInput = userForm.querySelector("input");
const playBtn = document.querySelector("#game #userinput button");

function onMaxSubmit(event){
    event.preventDefault();
    console.log("gi");
    localStorage.setItem(USERMAX_KEY, maxNum); // 저장
    localStorage.setItem(USERINPUT_KEY, userInput); // 저장
}

const savedUserMax = localStorage.getItem(USERMAX_KEY);
const savedUserInput = localStorage.getItem(USERINPUT_KEY);

if(savedUserMax === null){
    //get
    playBtn.addEventListener("click", onMaxSubmit);

} else {
    // play game
}