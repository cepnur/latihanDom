//DOM manipulation '
// membuat element baru
const pBaru = document.createElement("p");
//membuat teks baru/ conten baru
const teks = document.createTextNode("teks yang ditambahkan");

//mnyimpan teks ke dalam elemen
pBaru.appendChild(teks);
//simpan ke akhir dari element
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//cara lain
const liBaru = document.createElement("li");
const teksLi = document.createTextNode("ini teks baru");
liBaru.appendChild(teksLi);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

//menghapus child
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//mengganti
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

//membuat elemen baru
const h2Baru = document.createElement("h2");
const h2BAruTeks = document.createTextNode("teks baru yang menggantikan p");

h2Baru.appendChild(h2BAruTeks);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
