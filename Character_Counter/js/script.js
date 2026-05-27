//Select DOM element
const count = document.getElementById("count");
const output = document.getElementById("output");

//Listen for user input
count.addEventListener("input", () => {
  value = count.value;
  length = value.length;

  output.textContent = length;

  //changing text color base on the limit
  if (length >= 30) {
    output.classList.add("limit");
  } else if (length >= 20) {
    output.classList.remove("warning", "danger", "limit");
    output.classList.add("danger");
  } else if (length >= 10) {
    output.classList.remove("warning", "danger", "limit");
    output.classList.add("warning");
  } else {
    output.classList.remove("warning", "danger", "limit");
  }
});
