const biru = document.getElementById("biru");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
biru.onclick = function () {
  // document.body.style.backgroundColor = "blue";
  // document.body.setAttribute("class", "biru-muda");
  //agar dapat kembali putih atau memanipulasi class
  document.body.classList.toggle("biru-muda");
};

red.addEventListener("click", function () {
  document.body.classList.toggle("merah");
});
yellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

const acakWarna = document.createElement("button");
const teksWarna = document.createTextNode("Acak Warna");
acakWarna.appendChild(teksWarna);
acakWarna.setAttribute("type", "button");
biru.after(acakWarna);

acakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
});

const slideMerah = document.querySelector("input[name=slideMerah]");
const slideHijau = document.querySelector("input[name=slideHijau]");
const slideBiru = document.querySelector("input[name=slideBiru]");

slideMerah.addEventListener("input", function () {
  const r = slideMerah.value;
  document.body.style.backgroundColor = "rgb(" + r + ", 100, 100)";
});
slideHijau.addEventListener("input", function () {
  const r = slideMerah.value;
  const g = slideHijau.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", 100)";
});
slideBiru.addEventListener("input", function () {
  const r = slideMerah.value;
  const g = slideHijau.value;
  const b = slideBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientX / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
