const btn = document.getElementById("toggle");
const menu = document.querySelector(".menu");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.add("menu-open");
  menu.classList.add("show");
  document.body.classList.add("hidden");
});

const close = document.querySelector(".close");

close.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.remove("menu-open");
  menu.classList.remove("show");
  document.body.classList.remove("hidden");
});