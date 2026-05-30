const button = document.getElementById("button");
const text = document.getElementById("text");

button.onclick = function () {
  const num = Math.floor(Math.random() * 10) + 1;
  console.log(`${num}`);

  for (i = 1; i <= 10; i++) {
    document.body.classList.remove(`bg_${i}`);
  }

  document.body.classList.add(`bg_${num}`);

  if (num == 2 || num == 9 || num == 7) {
    text.classList.add("white");
  } else {
    text.classList.remove("white");
  }
};
