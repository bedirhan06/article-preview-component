import '@/styles/index.scss';

const footerEl = document.querySelector(".js-footer");
const userEl = document.querySelector(".js-user");
const shareEl = document.querySelector(".js-share");
const shareTextEl = document.querySelector(".js-share-text");
const iconEl = document.querySelector(".js-share-icon-wrapper");
const shareIconEl = document.querySelector(".js-share-icon");
const tooltipEl = document.querySelector(".js-share-tooltip");

let active = false;

iconEl.addEventListener("click", (event) => {
  // Desktop
  if (window.innerWidth >= 768) {
    if (active) {
      tooltipEl.classList.remove("share__tooltip--active");
    } else {
      tooltipEl.classList.add("share__tooltip--active");
    }
  }
  // Mobile
  else {
    if (active) {
      userEl.hidden = false;
      shareEl.hidden = true;
      footerEl.classList.remove("footer--active");
    } else {
      userEl.hidden = true;
      shareEl.hidden = false;
      footerEl.classList.add("footer--active");
    }
  }

  active = !active;
});
