console.log(document.getElementById("zero").innerHTML);
const button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mousedown", () => {
    button[i].classList.add("colorChange");
  });
  button[i].addEventListener("mouseup", () => {
    button[i].classList.remove("colorChange");
  });
}
