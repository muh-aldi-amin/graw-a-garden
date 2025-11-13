const bibitData = [
  { nama: "Bibit Tomat", harga: "Rp5.000", gambar: "https://cdn.pixabay.com/photo/2016/03/05/22/20/tomatoes-1238251_960_720.jpg" },
  { nama: "Bibit Cabai", harga: "Rp6.000", gambar: "https://cdn.pixabay.com/photo/2017/02/01/13/52/chili-2039497_960_720.jpg" },
  { nama: "Bibit Selada", harga: "Rp4.000", gambar: "https://cdn.pixabay.com/photo/2016/11/23/15/39/salad-1853300_960_720.jpg" },
  { nama: "Bibit Bayam", harga: "Rp3.500", gambar: "https://cdn.pixabay.com/photo/2017/09/26/22/31/spinach-2796473_960_720.jpg" },
];

const bibitList = document.getElementById("bibitList");
const bibitSelect = document.getElementById("bibitSelect");

bibitData.forEach(bibit => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${bibit.gambar}" alt="${bibit.nama}">
    <h3>${bibit.nama}</h3>
    <p>${bibit.harga}</p>
  `;
  bibitList.appendChild(card);

  const option = document.createElement("option");
  option.value = bibit.nama;
  option.textContent = bibit.nama;
  bibitSelect.appendChild(option);
});

document.getElementById("formPesan").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const bibit = document.getElementById("bibitSelect").value;
  const jumlah = document.getElementById("jumlah").value;
  document.getElementById("pesanSukses").textContent =
    `Terima kasih, ${nama}! Pesanan ${jumlah} bibit ${bibit} sudah kami terima 🌱`;
  e.target.reset();
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
