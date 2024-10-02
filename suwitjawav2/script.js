function getPilihanComp() {
  const com = Math.random();
  if (com < 0.34) return "gajah";
  if (com >= 0.34 && com < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  //menentukan rules
  if (player == comp) return "seri";

  if (player == "gajah") return comp == "orang" ? "menang!" : "kalah!";
  if (player == "orang") return comp == "gajah" ? "kalah!" : "menang!";
  if (player == "semut") return comp == "orang" ? "kalah!" : "menang!";
}

function putar() {
  const imgComp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    putar();

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// cara tidak efektif

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
