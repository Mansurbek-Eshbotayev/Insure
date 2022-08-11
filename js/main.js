let elInner = document.querySelector(".header__inner");
let elBtn = document.querySelector(".header__btn");

elBtn.addEventListener("click",function(){
  elInner.classList.toggle("header__inner--active");
  elBtn.classList.toggle("header__btn--active");
})