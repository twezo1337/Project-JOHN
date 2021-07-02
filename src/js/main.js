"use strict";

const burger = document.querySelector(".icon__menu"),
      menu   = document.querySelector(".menu__body");

burger.addEventListener("click", () => {
     /*if (burger.classList.contains("_active")) {
          burger.classList.remove("_active");
     } else {                                     ---------------------тоже самое, что и toggle
          burger.classList.add("_active");
     }*/
     burger.classList.toggle("_active");

     menu.classList.toggle("_active");
     
});

let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
    navItem = document.querySelector(`[data-id-nav = ${pageId}]`);

if (pageId == navItem.getAttribute("data-id-nav")) {
     navItem.classList.add("active__color");
}
