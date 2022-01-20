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
