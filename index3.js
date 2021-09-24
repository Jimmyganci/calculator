const button = document.querySelectorAll("button");
const calcul = document.getElementById("numberInput");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", () => {
    button[i].classList.add("hover");
  });
  button[i].addEventListener("mouseout", () => {
    button[i].classList.remove("hover");
  });

  button[i].addEventListener("mousedown", () => {
    button[i].classList.add("colorChange");
    if (button[i] !== "") {
      let showNumber = [];
      showNumber.push(button[i].value);
      calcul.value += showNumber;
      console.log(showNumber);
    }
    let number = calcul.value;
    console.log(number);
  });
  button[i].addEventListener("mouseup", () => {
    button[i].classList.remove("colorChange");
  });
}
const total = document.getElementById("equal");
total.addEventListener("click", () => {
  calcul.value = eval(calcul.value);
  if (calcul.value === "Infinity") {
    calcul.value = 0;
  }
});
document.getElementById("clear").addEventListener("click", () => {
  calcul.value = "";
});
