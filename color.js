const bodyBackground = document.querySelector(".bodybackground");
const inputColor = document.querySelector("input");

const currentColor = localStorage.getItem("theme");
if (currentColor) {
  bodyBackground.style.backgroundColor = currentColor;
}

inputColor.addEventListener("input", function () {
  const color = inputColor.value;
  bodyBackground.style.backgroundColor = color;

  localStorage.setItem("theme", color);
});
