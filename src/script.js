const toggleMenu = document.querySelector("a.mobile-nav-toggle");
const containerMover = document.querySelector("#container");
const mobileMenu = document.querySelector(".mobile-menu");

toggleMenu.addEventListener("click", (event) => {
  event.preventDefault();

  if (toggleMenu.className.indexOf("opened") === -1) {
    toggleMenu.className += " opened";
    containerMover.className += " move";
    mobileMenu.className += " open";
  } else if (toggleMenu.className.indexOf("opened") !== -1) {
    toggleMenu.className = toggleMenu.className.replace(" opened", "");
    containerMover.className = containerMover.className.replace(" move", "");
    mobileMenu.className = mobileMenu.className.replace(" open", "");
  }
});