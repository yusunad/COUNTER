const qrForm = document.getElementById("qrForm");
const qrText = document.getElementById("textInput");
const qrCode = document.getElementById("qrCodeContainer");

qrForm.addEventListener("submit", function (event) {
  event.preventDefault();

  qrCode.innerHTML = ""; // Clear previous text

  const data = qrText.value.trim();

  const qrCodeStyling = new QRCodeStyling({
    data,
    type: "svg",
    shape: "square",
    width: 300,
    height: 300,
  });

  qrCodeStyling.append(qrCode);
  qrForm.reset();
});
