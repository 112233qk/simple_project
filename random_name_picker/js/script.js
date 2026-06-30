const randomName = document.querySelectorAll("#main p");
const button = document.getElementById("button");
let active = null;

button.onclick = function () {
  //check and remove if the name is highlighted
  if (active) {
    active.classList.remove("highlighted");
  }

  randomIndex = Math.floor(Math.random() * randomName.length);

  const pickedName = randomName[randomIndex];

  pickedName.classList.add("highlighted");

  active = pickedName;
};
