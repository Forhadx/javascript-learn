const input = document.querySelector("input");
const btn = document.querySelector("button");
const mainDiv = document.querySelector(".page-msg");
const ul = document.querySelector(".single");

btn.addEventListener("click", () => {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    const span = document.createElement("span");
    span.textContent = "X";
    li.append(span);
    ul.append(li);
    input.value = "";

    span.addEventListener("click", () => {
      li.remove();
    });
  }
});
