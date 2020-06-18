let leftButton = document.querySelector("button.left-button");
let rightButton = document.querySelector("button.right-button");
let imgDiv = document.querySelector(".img-div");
let mainImg = document.querySelector(".img-div img");
let numberOfImages = 5;
let direction = 1;
var flipInterval;
function flipImg(dir) {//dir for direction it can be 1 or -1
  let imgSrc = mainImg.src;
  let initImgSrc = imgSrc.slice(0, -5);
  let midImgSrc = imgSrc.slice(-5, -4);
  let endImgSrc = imgSrc.slice(-4);
  midImgSrc = (Number(midImgSrc) + dir + numberOfImages)%numberOfImages;
  imgSrc = initImgSrc + midImgSrc + endImgSrc;
  mainImg.style.opacity = 0;
  mainImg.addEventListener("transitionend", function () {
    mainImg.src = imgSrc;
    mainImg.style.opacity = 1;
  });  
}
leftButton.addEventListener("click", function () {
  direction = -1;
  flipImg(direction);
});

rightButton.addEventListener("click", function () {
  direction = 1;
  flipImg(direction);
});

function flipImgFunction() {
  flipInterval = setInterval(function () {
    flipImg(direction);
  }, 3000);
}

flipImgFunction();

imgDiv.addEventListener("mouseover", function () {
  clearInterval(flipInterval);
});

imgDiv.addEventListener("mouseout", function () {
  flipImgFunction();
});

mainImg.addEventListener("click", function () {
  direction = 0;
});








//
