const button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", () => {
    button[i].classList.add("hover");
  });
  button[i].addEventListener("mouseout", () => {
    button[i].classList.remove("hover");
  });
  button[i].addEventListener("mousedown", () => {
    button[i].classList.add("colorChange");
    console.log(button[i].value);
  });
  button[i].addEventListener("mouseup", () => {
    button[i].classList.remove("colorChange");
  });
}
