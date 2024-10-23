const toTopBtn = document.querySelector(".to-top-a");
const bottomLabel = document.querySelector(".bottom-label");

window.onscroll = () => {
  if (window.scrollY > 150) {
    toTopBtn.style.opacity = "1";
    toTopBtn.style.bottom = "3vw";
    toTopBtn.style.pointerEvents = "all";

    bottomLabel.style.opacity = "0";
  } else {
    toTopBtn.style.bottom = "0.5vw";
    toTopBtn.style.opacity = "0";
    toTopBtn.style.pointerEvents = "none";

    bottomLabel.style.opacity = "1";
  }
};
