//dom selection
//getElementById() --> mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "cepnur";

//getElemetsByTagName() -> mengembalikan HTML Collections
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "pink";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

//getElemetnsByClassName() -> mengembalikan html Collections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diganti dengan javascript";
