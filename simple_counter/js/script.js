const count = document.getElementById("count");
const minus = document.getElementById("-");
const reset = document.getElementById("reset");
const plus = document.getElementById("+");

// onclick event also check if count exceed the limit
function counting(amount, error) {
  return function () {
    let value = Number(count.textContent);
    if (value + amount >= -100 && value + amount <= 100) {
      value += amount;
      count.textContent = String(value);
    } else {
      window.alert("Exceeding 100 limit");
    }
  };
}

minus.onclick = counting(-1, "Cannot go below -100!");
plus.onclick = counting(1, "Cannot exceed 100!");
//reset count
reset.onclick = function () {
  count.textContent = "0";
};
