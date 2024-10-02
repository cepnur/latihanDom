// //querySelector -> mengembalikan Element

// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "red";

// // const p = document.querySelector("p");
// // p.innerHTML = "ini diubah dengan javascript";

// //querySelectorAll() mengembalikan NodeList

// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// //p[2].style.backgroundColor = "lightblue";

//cara lain menggunakan nodelist
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
