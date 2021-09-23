// const firstValue = prompt("first value");
// const operator = prompt("Add operator");
// const secondValue = prompt("second value");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operator = document.getElementById("operator");
const inputs = document.querySelectorAll("input");
const results = document.getElementById("result");

for (i = 0; i < inputs.length; i++) {
  inputs[i].style.background = "lightblue";
  inputs[i].style.padding = "1em";
  inputs[i].style.border = "none";
  inputs[i].style.boxShadow = "0 0 5px 1px rgba(0,0,0,0.5";
  inputs[i].style.fontSize = "1em";
}
operator.style.width = "2em";
document.getElementById("calcul").addEventListener("click", (e) => {
  e.preventDefault();

  switch (operator.value) {
    case "+":
      results.innerHTML = parseInt(number1.value) + parseInt(number2.value);
      break;
    case "-":
      results.innerHTML = parseInt(number1.value) - parseInt(number2.value);
      break;
    case "*":
      results.innerHTML = parseInt(number1.value) * parseInt(number2.value);
      break;
    case "/":
      results.innerHTML = parseInt(number1.value) / parseInt(number2.value);
    case "Infinity":
      results.innerHTML = 0;
      break;
    default:
      results.innerHTML = "Invalid operator";
  }
  number1.value = "";
  number2.value = "";
  operator.value = "";
});
