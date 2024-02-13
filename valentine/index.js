const clientWidth = window.innerWidth;
const clientHeight = window.innerHeight;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const noBtn = document.querySelector(".btn-no");

noBtn.addEventListener("mouseover", (e) => {
  noBtn.style.position = "absolute";
  noBtn.style.top = getRandomInt(clientHeight) + "px";
  noBtn.style.left = getRandomInt(clientWidth) + "px";
});

noBtn.addEventListener("click", (e) => {
  noBtn.style.position = "absolute";
  noBtn.style.top = getRandomInt(clientHeight - 54) + "px";
  noBtn.style.left = getRandomInt(clientWidth - 300) + "px";
});

const yesBtn = document.querySelector(".btn-yes");
const fScreen = document.querySelector(".first-screen");
const sScreen = document.querySelector(".second-screen");
console.log(fScreen);
console.log(yesBtn);
yesBtn.addEventListener("click", (e) => {
  console.log('gdfhgdgfhdfgh');
  fScreen.style.display = "none";
  sScreen.style.display = "flex";
});
