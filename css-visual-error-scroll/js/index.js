const stars = document.querySelector(".stars");
const moon = document.querySelector(".moon");
const desc = document.querySelector(".desc");
const btn = document.querySelector(".btn");
const mountains_behind = document.querySelector(".mountains_behind");
const mountains_front = document.querySelector(".mountains_front");
window.addEventListener("scroll", () => {
    let value = window.screenY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    desc.style.marginTop = value * 1.5 + "px";
    desc.style.marginRight = value * 2.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";
})