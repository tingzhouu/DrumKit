let drums = document.querySelectorAll(".drum");
console.log(drums);
drums.forEach(function(drum) {
  drum.addEventListener("click", handleClick);
});

//Detecting button press
function handleClick() {
  changeButtonColor(this);
  let letter = this.innerHTML;
  buttonAnimation(letter);
  playAudio(letter);
}

//Detecting keyboard press
function handleKey(e) {
  let letter = e.key;
  let button = document.querySelector("." + letter);
  changeButtonColor(button);
  buttonAnimation(letter);
  playAudio(letter);
}

//Changing Color Upon Keyboard Press/Button Click
function changeButtonColor(button) {
  if (button != null) {
    let color = getComputedStyle(button).getPropertyValue('color');

    if (color === "rgb(218, 4, 99)") {
      button.style.color = "#393424";

    } else {
      button.style.color = "rgb(218, 4, 99)";
    }
  }
}

document.addEventListener("keypress", handleKey);

function playAudio(letter) {

  switch (letter) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play()
      break;

    default:
      console.log(letter);
  }
}

function buttonAnimation(currentKey) {
  let button = document.querySelector("." + currentKey);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 125);
}
