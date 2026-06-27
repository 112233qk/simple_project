const date = document.getElementById("dateInput");
const button = document.getElementById("button");

button.onclick = function () {
  const dateObject = new Date(date.value);
  const todayDate = new Date();

  if (date.value == "") {
    window.alert("please enter your birthday");
    return;
  }

  let age = todayDate.getFullYear() - dateObject.getFullYear();
  const monthDiff = todayDate.getMonth() - dateObject.getMonth();
  const dayDiff = todayDate.getDate() - dateObject.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  window.alert(`you are ${age} years old`);
};
