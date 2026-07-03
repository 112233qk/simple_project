const button = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
const stopWatch = document.getElementById("stopWatch");

button.onclick = function () {
  now = new Date();
  nowTime = now.toLocaleTimeString();

  const li = document.createElement(`li`);
  li.textContent = nowTime;

  stopWatch.appendChild(li);
};

resetButton.onclick = function () {
  stopWatch.innerHTML = "";
};
