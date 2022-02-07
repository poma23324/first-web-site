function handleClick() {
  alert('Hello');
}

console.log(document.querySelectorAll('.drum').length);

for (let i = 0; i < document.querySelectorAll('.drum').length; i += 1) {
  console.log(i);
  document.getElementsByClassName('drum')[i].addEventListener('click', handleClick);
  console.log('Hello');
}
