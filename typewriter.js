"use strict";

window.addEventListener("load", start);

let text = document.querySelector(".text").textContent;
let len = text.length;

function start() {
  document.querySelector(".text").textContent = "";
  addLetter();
}
let n = 0;
const audio = document.querySelector("#typekey2");
const audio2 = document.querySelector("#typelast");

function addLetter() {
  console.log("addLetter");
  document.querySelector(".text").textContent = text.substring(0, n);
  check();
}

function check() {
  console.log("check");
  if (n < len) {
    console.log(n);
    audio.play();
    n++;
    setTimeout(addLetter, 1000);
  } else {
    end();
  }
}

function end() {
  audio2.play();
  console.log("The end");
}
