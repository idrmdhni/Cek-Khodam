const nameInput = document.getElementById("name-input");
const nameSubmit = document.getElementById("name-submit");

function randomKhodam() {
  const listKhodam = [
    "Rehan Wangsaf",
    "Bagas Dribble",
    "Sandal Jepit",
    "Gedebog Pisang",
    "Kepiting Malang",
    "Ikan Berkepala Lele",
    "Laba-laba Sunda",
    "Macan Cisewu",
    "Mas Narji",
    "Ferdi Kopling",
    "Velg Mio",
    "Oli Samping",
    "Sigit Rendang",
    "Bakwan Jagung",
    "Pecel Lele",
    "Nasi Kucing",
    "Kue Nastar",
    "Bubur Kacang",
  ];
  const indexKhodam = Math.round(Math.random() * (listKhodam.length - 1));
  console.log(indexKhodam);
  return listKhodam[indexKhodam];
}

nameSubmit.addEventListener("click", () => {
  const name = document.querySelector(".result p");
  const khodam = document.querySelector(".result span");

  name.innerHTML = `${nameInput.value}, khodam yang ada di dalam diri kamu adalah`;
  khodam.innerHTML = randomKhodam();
});
