const button = document.getElementById("button");
const text = document.getElementById("text");

button.onclick = function () {
  const num = Math.floor(Math.random() * 10) + 1;

  // removing unused color class to prevent class stacking
  for (let i = 1; i <= 10; i++) {
    document.body.classList.remove(`bg_${i}`);
  }

  document.body.classList.add(`bg_${num}`);

  //changin text color for dark bg
  if (num == 2 || num == 9 || num == 7) {
    text.classList.add("white");
  } else {
    text.classList.remove("white");
  }
};
