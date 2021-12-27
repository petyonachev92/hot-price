import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  addFireToHot();
});

function addFireToHot() {
  let hot = document.getElementsByClassName('hot')[0];
  let price = hot.textContent;
  hot.textContent = price + '🔥';
}
