const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertCurrency = document.getElementById("currency-form");
const convertedAmount = document.getElementById("converted-amount");

/*
const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num);
};

*/
convertCurrency.addEventListener("submit", function (event) {
  event.preventDefault();
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amountValue = parseFloat(amount.value);

  if (from === "USD" && to === "NGR") {
    convertedAmount.value = (amountValue * 1500).toFixed(2) + " NGR";
  } else if (from === "NGR" && to === "USD") {
    convertedAmount.value = (amountValue / 1500).toFixed(2) + " USD";
  } else if (from === "NGR" && to === "NGR") {
    convertedAmount.value = amountValue.toFixed(2) + " NGR";
  } else if (from === "USD" && to === "USD") {
    convertedAmount.value = amountValue.toFixed(2) + " USD";
  }
});
