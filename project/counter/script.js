let colors = ["red", "green", "blue", "black"];

const btn1 = document.querySelector(".btn-1");
const p1 = document.querySelector(".p-1");

btn1.addEventListener("click", () => {
  let randomNum = randomNumHandler();
  console.log(randomNum);
  p1.textContent = "color: " + colors[randomNum];
  document.body.style.backgroundColor = colors[randomNum];
});

function randomNumHandler() {
  return Math.floor(Math.random() * colors.length);
}

//----------------------------------------
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn2 = document.querySelector(".btn-2");
const p2 = document.querySelector(".p-2");

btn2.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getHexRandorm()];
  }
  console.log(hexColor);
  p2.textContent = "color: " + hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getHexRandorm() {
  return Math.floor(Math.random() * hex.length);
}
