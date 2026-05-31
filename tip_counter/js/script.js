const total = document.getElementById("total");
const tip = document.getElementById("tip");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function () {
  const value = total.value;
  const percent = tip.value;

  const count = value * percent;
  result.textContent = `your tip will be ${count}`;
};
