// Detecting Btn Press
let n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    playSound(btnInnerHTML);
    btnAnimation(btnInnerHTML);
  });
}

// Detecting Keyboard Press
// When key pressed, take this event as argument for fn which calls playSound fn
// The whole webpage listen to the keypressing event
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  btnAnimation(event.key);
});

// Create a function, when an event is triggered, play the matching sound.
// ❗️Take one argument: key
function playSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    default:
      console.log("error");
      break;
  }
}

function btnAnimation(currentKey) {
  // You need to store them in a variable
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
}
