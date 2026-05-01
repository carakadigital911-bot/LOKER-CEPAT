// DATA LOKER MANUAL - EDIT BAGIAN INI KALO MAU TAMBAH/UBAH LOKER
const dataLoker = [
  {
    posisi: "Admin Online Shop",
    perusahaan: "PT Maju Jaya",
    lokasi: "Jakarta Selatan",
    gaji: "Rp 3.000.000 - Rp 4.000.000",
    jenis: "Full Time",
    deskripsi: "Handle order Shopee & Tokopedia, bisa Excel dasar, jam kerja 9-6",
    kontak: "6281234567890"
  },
  {
    posisi: "Kurir Motor",
    perusahaan: "Anterin Aja Express",
    lokasi: "Jakarta Barat",
    gaji: "Rp 150.000 / hari",
    jenis: "Freelance",
    deskripsi: "Punya motor sendiri, SIM C aktif, area Grogol - Kebon Jeruk",
    kontak: "6289876543210"
  },
  {
    posisi: "Kasir Minimarket",
    perusahaan: "Indomaret Cabang Daan Mogot",
    lokasi: "Jakarta Barat",
    gaji: "UMR DKI Jakarta",
    jenis: "Full Time",
    deskripsi: "Shift pagi/malam, jujur, rapi, pengalaman lebih disukai",
    kontak: "628111222333"
  }
];

// JANGAN DIUTAK-ATIK DARI SINI KE BAWAH
function loadLoker() {
  const container = document.getElementById('loker-list');
  container.innerHTML = '';

  // .reverse() biar loker terbaru di atas
  dataLoker.reverse().forEach(loker => {
    const card = `
      <div class="loker-card">
        <span class="badge">${loker.jenis}</span>
        <span class="badge">${loker.lokasi}</span>
        <h2>${loker.posisi}</h2>
        <p><strong>Perusahaan:</strong> ${loker.perusahaan}</p>
        <p><strong>Gaji:</strong> ${loker.gaji}</p>
        <p><strong>Deskripsi:</strong> ${loker.deskripsi}</p>
        <p><strong>Lamar:</strong> <a href="https://wa.me/${loker.kontak}" target="_blank">Chat WA ${loker.kontak}</a></p>
      </div>
    `;
    container.innerHTML += card;
  });

  if (dataLoker.length === 0) {
    container.innerHTML = '<p class="loading">Belum ada loker. Cek lagi besok ya!</p>';
  }
}

// Jalanin pas halaman kebuka
loadLoker();
