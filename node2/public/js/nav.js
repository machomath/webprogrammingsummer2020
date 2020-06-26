const myCurrentPage = window.location.href;
let anchors = document.querySelectorAll("nav a");
anchors.forEach((item, i) => {
  if(item.href === myCurrentPage){
    item.classList.add("this-page");
  }
});
