const body = document.querySelector("body");
const toggleButton = document.querySelector(".toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark");
  toggleButton.innerHTML = "Disable Dark Mode";
} else {
  body.classList.remove("dark");
  toggleButton.innerHTML = "Enable Dark Mode";
}

toggleButton.addEventListener("click", function () {
  const isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    body.classList.remove("dark");
    toggleButton.innerHTML = "Enable Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    toggleButton.innerHTML = "Disable Dark Mode";
    localStorage.setItem("theme", "dark");
  }
});
