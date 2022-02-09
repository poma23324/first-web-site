
function playAudio(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'k':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    case 'l':
      new Audio('sounds/snare.mp3').play();
      break;
    default:
  }
}

function btnAnimation(key) {
  let button = document.querySelector(`.${key}`);
  button.classList.toggle('pressed');

  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}

document.addEventListener('keypress', (event) => {
  playAudio(event.key);
  btnAnimation(event.key);
});

for (let i = 0; i < document.querySelectorAll('.drum').length; i += 1) {
  console.log(i);
  document.getElementsByClassName('drum')[i].addEventListener('click', function () {
    console.log(this);
    console.log(this.textContent);
    playAudio(this.textContent);
    btnAnimation(this.textContent);
  });
  console.log('Hello');
}
