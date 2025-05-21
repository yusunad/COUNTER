const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const tipForm = document.querySelector("tip-form");
const displayTip = document.querySelector("#displaytip");
const totalBill = document.querySelector("#totalbill");

tipForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const amount = parseFloat(billAmount.value);
  const percentage = parseFloat(tipPercentage.value);
  const tip = (percentage / 100) * amount;
  const totalBill = amount + tip;

  displayTip.textContent = tip;
  totalBill.textContent = totalBill;
});
