/*const countInput = document.querySelector(".counterinput");
const decreament = document.querySelector(".decreasebtn");
const increament = document.querySelector(".increasebtn");
const resetbtn = document.querySelector(".resetbtn");
const input = document.querySelector(".input");

let count = 0;

increament.addEventListener("click", function () {
  count++;
  countInput.textContent = count;

  let value = parseInt(input.value) || 1;
  count -= value;
  countInput.textContent = count;
  if (count > 0) {
    countInput.style.color = "green";
  }
});

decreament.addEventListener("click", function () {
  count--;
  countInput.textContent = count;
  if (count < 0) {
    countInput.style.color = "red";
  }
});

resetbtn.addEventListener("click", function () {
  count = 0;
  countInput.style.color = "black";
  countInput.textContent = count;
});

*/

const countInput = document.querySelector(".counterinput");
const decreament = document.querySelector(".decreasebtn");
const increament = document.querySelector(".increasebtn");
const resetbtn = document.querySelector(".resetbtn");
const input = document.querySelector(".input");

let count = 0;

increament.addEventListener("click", function () {
  let value = parseInt(input.value) || 1;
  if (value === 0) {
    alert("Please input a digit");
    return;
  }
  count += value;
  countInput.textContent = count;

  if (count > 0) {
    countInput.style.color = "green";
  } else if (count === 0) {
    countInput.style.color = "black";
  }
});

decreament.addEventListener("click", function () {
  let value = parseInt(input.value) || 1;
  count -= value;
  countInput.textContent = count;

  if (count < 0) {
    countInput.style.color = "red";
  } else if (count === 0) {
    countInput.style.color = "black";
  }
});

resetbtn.addEventListener("click", function () {
  count = 0;
  countInput.textContent = count;
  countInput.style.color = "black";
  input.value = "";
});
