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
  let audio = null;

  switch (letter) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;

    default:
      console.log(letter);
  }

  if (audio != null) {
    audio.play();
  }
}

function buttonAnimation(currentKey) {
  let button = document.querySelector("." + currentKey);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 125);
}
