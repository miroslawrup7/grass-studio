// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const imgWrapper = document.querySelector(".img-wrapper");
const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");
const closeBtn = lightbox.querySelector(".close-btn");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;

    if (imgWrapper.querySelector("img")) {
      imgWrapper.removeChild(imgWrapper.querySelector("img"));
    }
    imgWrapper.appendChild(img);
  });
});

closeBtn.addEventListener("click", (e) => {
  lightbox.classList.remove("active");
});

// MOBILE MENU
const nav = document.querySelector(".navigation");
const ham = document.querySelector(".hamburger");
const mobileClose = document.querySelector(".mobile-close");
const dropMenu = document.querySelectorAll(".sub-nav-btn");

ham.addEventListener("click", (e) => {
  nav.classList.add("mobile-open");
  document.body.classList.add("no-scroll");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".navigation") && !e.target.closest(".hamburger")) {
    nav.classList.remove("mobile-open");
    document.body.classList.remove("no-scroll");
    dropMenu.forEach((element) => {
      element.nextElementSibling.classList.remove("drop-down");
    });
  }
});

dropMenu.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("drop-down");
    element.classList.toggle("drop-menu-down");
  });
});
