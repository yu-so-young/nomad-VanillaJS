const MAXNUM_KEY = "maxNumInput";
const USERNUM_KEY = "userNumInput";

const maxNumInput = document.querySelector("#game #usermax input");
const userNumInput = document.querySelector("#game #userinput input");
const playBtn = document.querySelector("#game #userinput button");

function clickPlayBtn(event) {
  event.preventDefault();
  console.log("gi");
  const maxNum = maxNumInput.value;
  const userNum = userNumInput.value;

  showResult(userNum, maxNum);
}

function showResult(input, max) {
  let random = genRanNum(max);
  let result = "win";
  if (judge(input, random) === false) {
    result = "lost";
  }
  result1.classList.remove("hidden");
  result2.classList.remove("hidden");
  result1.innerText = `You chose ${input}, the machine chose ${random}.`;
  result2.innerText = `You ${result}!`;
}

function genRanNum(max) {
  return Math.floor(Math.random() * max);
}

function judge(input, answer) {
  if (input == answer) {
    return true;
  } else {
    return false;
  }
}

const savedUserMax = localStorage.getItem(MAXNUM_KEY);
const savedUserInput = localStorage.getItem(USERNUM_KEY);

const result1 = document.querySelector("#game #userinput #result1");
const result2 = document.querySelector("#game #userinput #result2");

playBtn.addEventListener("click", clickPlayBtn);
