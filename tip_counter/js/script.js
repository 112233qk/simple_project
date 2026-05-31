const total = document.getElementById("total");
const tip = document.getElementById("tip");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function () {
  const value = Number(total.value);
  const percent = Number(tip.value);

  // check the value if is within the limit
  if (percent < 0 || value < 0) {
    window.alert("tip or total cannot be under 0");
    total.value = "";
    tip.value = "";
    result.textContent = ``;
  } else if (value == 0) {
    window.alert("total cannot be 0 or empty");
    result.textContent = ``;
  } else if (percent > 999 || value > 999999) {
    window.alert("total cannot exceed 999999 and 999%");
    total.value = "";
    tip.value = "";
    result.textContent = ``;
  } else {
    const count = (value * (percent / 100)).toFixed(2);
    result.textContent = `your tip will be ${count}$`;
  }
};
