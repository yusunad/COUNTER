const checkbox = document.querySelector("#checkbox");
const imagebox = document.querySelector("#imagebox");
const label = document.querySelector("label");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    imagebox.style.backgroundImage = "none";
    label.textContent = "Show Image";
  } else {
    imagebox.style.backgroundImage = "url(boyimage.jpg)";
    label.textContent = "Hide Image";
  }
});
