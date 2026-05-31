const total = document.getElementById("total");
const tip = document.getElementById("tip");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function () {
  const value = total.value;
  const percent = tip.value;

  if (percent < 0 || value < 0) {
    window.alert("tip or total cannot be under 0");
  } else if (value == 0) {
    window.alert("total cannot be 0");
  } else if (percent > 999 || value > 999999) {
    window.alert("total cannot exceed 999999 and 999%");
  } else {
    const count = value * (percent / 100);
    result.textContent = `your tip will be ${count}$`;
  }
};
