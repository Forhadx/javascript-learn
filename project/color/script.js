const b1 = document.querySelector(".btn-1");
const b2 = document.querySelector(".btn-2");
const b3 = document.querySelector(".btn-3");

const p = document.querySelector("p");

let count = 0;
p.textContent = 0;

b1.addEventListener("click", () => {
  count += 1;
  p.textContent = count;
});

b2.addEventListener("click", () => {
  count = 0;
  p.textContent = count;
});

b3.addEventListener("click", () => {
  count -= 1;
  p.textContent = count;
});
