const footerEl = document.querySelector(".js-footer");
const userEl = document.querySelector(".js-user");
const shareEl = document.querySelector(".js-share");
const shareTextEl = document.querySelector(".js-share-text");
const iconEl = document.querySelector(".js-share-icon-wrapper");
const shareIconEl = document.querySelector(".js-share-icon");

if (window.screen.width >= 768) {
  
} else {
  let active = false;

  iconEl.addEventListener("click", (event) => {
    if (active) {
      userEl.hidden = false;
      shareEl.hidden = true;
      footerEl.classList.remove("footer--active");
    } else {
      userEl.hidden = true;
      shareEl.hidden = false;
      footerEl.classList.add("footer--active");
    }
    active = !active;
  });
}
