const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector("aside");

navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modal.classList.toggle("openModal");
});
