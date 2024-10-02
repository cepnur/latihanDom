let hapus = document.querySelectorAll(".close");

// for (let i = 0; i < hapus.length; i++) {
//   hapus[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

//atau bisa juga
hapus.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
