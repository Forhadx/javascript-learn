// style html  <p>
let p = document.querySelector("p");
p.style.backgroundColor = "blue";
p.style["font-size"] = "2rem";
p.style["color"] = "white";

// add h1 tag
(function () {
  let style = `<style>
    .head{
      color: green;
      border: 1px solid black;
      padding: .5rem;
    }
  </style>`;
  document.head.insertAdjacentHTML("beforeend", style);
})();

let h = document.createElement("h1");
h.className = "head";
h.textContent = "hello brothers..";
p.after(h);

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
