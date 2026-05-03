//Select DOM element from index.html
const submit = document.getElementById("submit");
const Name = document.getElementById("name");
const greet = document.getElementById("greet");

// button click event
submit.onclick = function () {
  const value = Name.value;

  //validating input: allow only letter and spaces
  if (!/^[a-zA-Z ]+$/.test(value)) {
    window.alert("only letter are allowed");
    greet.textContent = `Greeting`;
    Name.value = "";
    return;
  }
  // display Greeting with input value and clear the input field
  else {
    greet.textContent = `Greeting ${value}`;
    Name.value = "";
  }
};
