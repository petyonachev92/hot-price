import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  addFireToHot();
});

function addFireToHot() {
  let hot = document.querySelectorAll('.hot');

  hot.forEach(el => {
    let price = el.textContent;
    el.textContent = price + '🔥';
  })
}
