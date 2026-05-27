//Select DOM element from index.html
const count = document.getElementById("count");
const output = document.getElementById("output");

count.addEventListener("input", () => {
  value = count.value;
  length = value.length;

  output.textContent = length;
});
