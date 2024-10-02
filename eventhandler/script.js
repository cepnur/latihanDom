const p3 = document.querySelector(".p3");

function ubahWarnap2() {
  p2.style.backgroundColor = "lightblue";
}
//cara inline dengan onclick
function ubahWarnap3() {
  p3.style.backgroundColor = "lightblue";
}

//cara onclick dengan tanpa ilnine (direkomendasikan)
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnap2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("ini teks baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

//NOTE : PERBEDAAN ADDEVENTLISTENER DENGAN EVENTHANDLER ADALAH :
// EVENT HANDLER AKAN MENIMPA FUNGSI YANG LAMA JIKA ADA YANG BARU, TPI JIKA ADDEVENTLISTENER AKAN MENAMBAH FUNGSI YANG BARU,KEDUANYA AKAN TETAP BERJALAN
