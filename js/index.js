const toTopBtn = document.querySelector(".to-top-a");
const bottomLabel = document.querySelector(".bottom-label");
const funFactCover = document.querySelector(".fun-fact-cover");
const funFactInfo = document.querySelector(".fun-fact-info");
const funFactTitle = document.querySelector(".fun-fact-title");

window.onscroll = () => {
  if (window.scrollY > 150) {
    toTopBtn.style.opacity = "1";
    toTopBtn.style.bottom = "2.6vw";
    toTopBtn.style.pointerEvents = "all";

    bottomLabel.style.opacity = "0";
  } else {
    toTopBtn.style.bottom = "0.5vw";
    toTopBtn.style.opacity = "0";
    toTopBtn.style.pointerEvents = "none";

    bottomLabel.style.opacity = "1";
  }
};

funFactCover.addEventListener("mouseover", () => {
  funFactTitle.textContent = `On average, railroads are three to four times more fuel efficient
            than trucks on a ton-mile basis. Railroads can move one ton of
            freight more than 480 miles on a single gallon of fuel, generating a
            carbon footprint up to 75% less than trucks and making them the most
            fuel-efficient way to move freight over land.`;
  funFactTitle.style.fontSize = "0.8vw";
});

funFactCover.addEventListener("mouseout", () => {
  funFactTitle.textContent = `Trains are the most environmentally responsible way to ship
              freight by land`;
  funFactTitle.style.fontSize = "1.4vw";
});
