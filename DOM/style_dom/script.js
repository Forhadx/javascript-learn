// process - 1
const h1 = document.querySelector("h1");
const btn1 = document.querySelector(".btn-1");

btn1.addEventListener("click", () => {
  if (h1.className === "red") {
    h1.className = "green";
  } else {
    h1.className = "red";
  }
});

// process - 2
const h2 = document.querySelector("h2");
const btn2 = document.querySelector(".btn-2");

btn2.addEventListener("click", () => {
  h2.classList.toggle("green");
  // h2.classList.toggle("red");
});
