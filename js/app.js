document.getElementById("generate-btn").addEventListener("click", function () {
  const input = document.getElementById("qr-input").value.trim();
  const qrImage = document.getElementById("qr-image");

  if (!input) return;

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    input
  )}`;

  qrImage.src = url;
  qrImage.style.display = "block";
});
