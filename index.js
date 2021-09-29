
//  clicking the button to light up the bulb

let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let audio = document.querySelector("#audio");

btn.onclick = function () {
    body.classList.toggle("on");
    audio.play();
}