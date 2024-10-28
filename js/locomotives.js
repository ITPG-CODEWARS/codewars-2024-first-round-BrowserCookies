const contentDiv = document.querySelector(".content");
const cards = document.querySelectorAll(".locomotive-card");
const divs = document.querySelectorAll(".locomotive-div");
const backBtn = document.querySelector(".back-btn");

cards.forEach((card) => {
  card.onclick = () => {
    const action = card.getAttribute("action");

    divs.forEach((div) => {
      if (div.classList.contains(action)) {
        contentDiv.style.display = "none";
        div.style.display = "flex";

        backBtn.style.opacity = "1";
        backBtn.style.bottom = "3vw";
        backBtn.style.pointerEvents = "all";

        backBtn.onclick = () => {
          div.style.display = "none";
          contentDiv.style.display = "flex";

          backBtn.style.bottom = "0.5vw";
          backBtn.style.pointerEvents = "none";
          backBtn.style.opacity = "0";
        };
      }
    });
  };
});
