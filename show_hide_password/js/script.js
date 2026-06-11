const password = document.getElementById("password");
const button = document.getElementById("button");

//to show/hide the password
button.onclick = function () {
  if (password.type == "text") {
    password.type = "password";
    console.log(input);
  } else {
    password.type = "text";
    console.log(input);
  }
};
