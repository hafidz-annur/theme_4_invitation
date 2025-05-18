const data = {
  musik: "musik/nikah.mp3",
  foto_cover: ["img/galeri/6.webp", "img/galeri/1.jpeg", "img/galeri/7.jpg"],
  foto_opening: "img/galeri/6.webp",
  mempelai: {
    pria: {
      nama_panggilan: "Vidi",
      nama_lengkap: "Oxavia Aldiano",
      anak_ke: "Pertama",
      orang_tua: {
        ayah: "Harry Kiss",
        ibu: "Besbarini",
      },
      alamat: "Jakarta Selatan",
      foto: "img/pria.webp",
      insta: "https://www.instagram.com/",
    },
    wanita: {
      nama_panggilan: "Sheila",
      nama_lengkap: "Sheila Dara Aisha",
      anak_ke: "Kedua",
      orang_tua: {
        ayah: "Dharmawan Aisha",
        ibu: "Nurhayati",
      },
      alamat: "Jakarta Selatan",
      foto: "img/wanita.webp",
      insta: "https://www.instagram.com/",
    },
  },
  acara: {
    akad_nikah: {
      raw_tanggal: "2025-12-10",
      tanggal_format: "Minggu, 10 Desemeber 2025",
      hari: "Minggu",
      tanggal: "10",
      bulan: "Desember",
      tahun: "2025",
      waktu: "07:00 WIB - Selesai",
      tempat: "Gedung Serba Guna Mutiara",
    },
    resepsi: {
      raw_tanggal: "2025-12-10",
      tanggal_format: "Minggu, 10 Desemeber 2025",
      hari: "Minggu",
      tanggal: "10",
      bulan: "Desember",
      tahun: "2025",
      waktu: "09:00 WIB - Selesai",
      tempat: "Gedung Serba Guna Mutiara",
    },
  },
  lokasi: {
    tempat: "Gedung Serba Guna Mutiara",
    maps_link: "https://maps.app.goo.gl/nSSq7KtQFmS9YW3A8",
    maps_embed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126925.35030593108!2d106.6845464872138!3d-6.208574832801584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16f5e08c98b%3A0x4b3a67de652f1747!2sMutiara%20Auditorium%20PTIK!5e0!3m2!1sen!2sid!4v1747195117900!5m2!1sen!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  galeri: [
    { cols: 4, foto: "img/galeri/1.jpeg" },
    {
      cols: 8,
      foto: "img/galeri/2.jpeg",
      children: [
        { cols: 12, foto: "img/galeri/3.jpg" },
        { cols: 12, foto: "img/galeri/4.png" },
      ],
    },
    { cols: 6, foto: "img/galeri/5.webp" },
    { cols: 7, foto: "img/galeri/6.webp" },
    { cols: 5, foto: "img/galeri/7.jpg" },
    { cols: 6, foto: "img/galeri/8.jpg" },
    { cols: 6, foto: "img/wanita.webp" },
  ],
  hadiah: {
    bank: [
      {
        nama: "bca",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "bni",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "permata",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "mandiri",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
    ],
    ewallet: [
      {
        nama: "ovo",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "gopay",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "shopee",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "dana",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
      {
        nama: "linkaja",
        atas_nama: "Vidi Aldiano",
        norek: "78213122",
      },
    ],
    alamat: "Jl. Lapangan Tenis No 212 Srengseng Jakarta Barat, DKI Jakarta",
  },
};

export default data;
