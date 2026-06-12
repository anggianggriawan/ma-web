// Ganti dengan URL Google Apps Script Web App Anda yang asli
const scriptURL = 'https://anggianggriawan.github.io/ma-web/'; 

// Fungsi otomatis berjalan saat halaman web dibuka
document.addEventListener("DOMContentLoaded", function() {
  const selectNama = document.getElementById('nama');

  // Mengambil daftar nama dari Google Sheets via fungsi doGet()
  fetch(scriptURL)
    .then(response => response.json())
    .then(daftarNama => {
      // Kosongkan tulisan "Sedang memuat..."
      selectNama.innerHTML = '<option value="" disabled selected>-- Pilih Nama Anda --</option>';
      
      // Masukkan nama satu per satu ke dalam dropdown
      daftarNama.forEach(nama => {
        const option = document.createElement('option');
        option.value = nama;
        option.textContent = nama;
        selectNama.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Gagal memuat nama:', error);
      selectNama.innerHTML = '<option value="" disabled selected>Gagal memuat daftar nama</option>';
    });
});