const mainNavigation = document.querySelector(".navigation");
const hambutton = document.querySelector("#hamburger");

hambutton.addEventListener("click", () => {
  mainNavigation.classList.toggle("show-ham");
  hambutton.classList.toggle("show-ham");
});
