const toTopBtn = document.querySelector(".to-top-a");

window.onscroll = () => {
  if (window.scrollY > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
