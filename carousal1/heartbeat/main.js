let leftButton = document.querySelector("button.left-button");
let rightButton = document.querySelector("button.right-button");
let mainImg = document.querySelector(".img-div img");
let numberOfImages = 5;
function flipImg(dir) {//dir for direction it can be 1 or -1
  let imgSrc = mainImg.src;
  let initImgSrc = imgSrc.slice(0, -5);
  let midImgSrc = imgSrc.slice(-5, -4);
  let endImgSrc = imgSrc.slice(-4);
  midImgSrc = (Number(midImgSrc) + dir + numberOfImages)%numberOfImages;
  imgSrc = initImgSrc + midImgSrc + endImgSrc;
  mainImg.src = imgSrc;
}
leftButton.addEventListener("click", function () {
  flipImg(-1);
});

rightButton.addEventListener("click", function () {
  flipImg(1);
});
