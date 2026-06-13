/**
 * projects.js — Data Portofolio & Publikasi Roy Andika, S.Kom., M.Kom.
 * ============================================================
 * Untuk menambah / edit / hapus entri, cukup ubah array PROJECTS di bawah.
 * Tidak perlu menyentuh index.html sama sekali.
 * ============================================================
 *
 * Properti tiap objek:
 *   id        {number}  - Nomor urut (ditampilkan di sudut kanan kartu)
 *   tags      {string}  - Kategori dan Tahun (contoh: "Publikasi · 2022" atau "Project · 2024")
 *   tagColor  {string}  - Nama warna pastel Tailwind: lavender | azure | mint | peach | gold
 *   title     {string}  - Judul proyek / publikasi
 *   desc      {string}  - Deskripsi singkat
 *   linkLabel {string}  - Teks tautan (atau nama penerbit / institusi)
 *   linkUrl   {string}  - URL tautan atau "#" jika belum tersedia
 */

const PROJECTS = [

  // ── PUBLIKASI ────────────────────────────────────────────────────────────

  {
    id: 1,
    tags: "Publikasi · 2025",
    tagColor: "gold",
    title: "Optimasi Hiperparameter LSTM untuk Prediksi Pengadaan Bahan Baku Karet Alam",
    desc: "Membandingkan tiga arsitektur LSTM (LSTM, Bi-LSTM, Stacked LSTM) dengan tiga metode optimasi hiperparameter — Bayesian Optimization, Hyperband, dan Optuna — untuk forecasting kebutuhan bahan baku di industri karet alam.",
    linkLabel: "Jurnal Ilmu Pertanian Indonesia (JIPI) · 2025",
    linkUrl: "#",
  },
  {
    id: 2,
    tags: "Publikasi · 2022",
    tagColor: "gold",
    title: "Pemilihan Platform Video Conference Menggunakan Metode AHP di PT. Hok Tong",
    desc: "Penelitian Decision Support System berbasis Analytical Hierarchy Process (AHP) untuk mengevaluasi dan memilih platform video conferencing terbaik sesuai kebutuhan operasional perusahaan manufaktur karet.",
    linkLabel: "Jurnal Bina Manajemen dan Informatika (JBMI) · 2022",
    linkUrl: "#",
  },

  // ── PROYEK IT INFRASTRUCTURE ─────────────────────────────────────────────

  {
    id: 3,
    tags: "Project · 2018",
    tagColor: "azure",
    title: "Pembangunan Server NAS untuk Backup Rekaman CCTV/DVR",
    desc: "Merancang dan mengimplementasikan server Network-Attached Storage berbasis OpenMediaVault dan FreeNAS/TrueNAS sebagai solusi backup rekaman CCTV/DVR terpusat di PT. GMG Sentosa, meningkatkan keandalan penyimpanan rekaman keamanan secara signifikan.",
    linkLabel: "PT. GMG Sentosa · Pontianak",
    linkUrl: "#",
  },
  {
    id: 4,
    tags: "Project · 2019",
    tagColor: "mint",
    title: "Pembangunan Server Cloud Storage Berbasis Nextcloud",
    desc: "Implementasi solusi cloud storage private menggunakan Nextcloud untuk PT. Hok Tong Cluster Kalimantan mencakup seluruh cabang, menyediakan platform berbagi dan sinkronisasi file yang aman sebagai pengganti layanan cloud publik.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },
  {
    id: 5,
    tags: "Project · 2021",
    tagColor: "peach",
    title: "Implementasi Aplikasi IS/Data Center Operasional",
    desc: "Penerapan sistem informasi dan data center operasional berbasis Visual Basic di seluruh cabang PT. Hok Tong Cluster Kalimantan: PT. Sumber Djantin (Pontianak, Sambas, Sanggau), PT. Sumber Alam, PT. Hok Tong Pontianak, PT. GMG Sentosa, dan Head Office.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },
  {
    id: 6,
    tags: "Project · 2022",
    tagColor: "azure",
    title: "Implementasi ERP SAP Multi-Site",
    desc: "Memimpin implementasi sistem ERP SAP di seluruh cabang PT. Hok Tong Cluster Kalimantan: PT. Sumber Djantin (Pontianak, Sambas, Sanggau), PT. Sumber Alam, PT. Hok Tong Pontianak, PT. GMG Sentosa, dan Head Office — meliputi konfigurasi, migrasi data, dan pelatihan pengguna.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },
  {
    id: 7,
    tags: "Project · 2024",
    tagColor: "mint",
    title: "Implementasi Digital Scale Online untuk Penimbangan Bahan Baku",
    desc: "Pengembangan sistem timbangan digital berbasis Visual Basic yang terhubung secara online di seluruh cabang PT. Hok Tong Cluster Kalimantan, memungkinkan monitoring penimbangan bahan baku karet secara real-time dan terintegrasi dengan sistem operasional.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },

  // ── PROYEK PENGEMBANGAN APLIKASI ─────────────────────────────────────────

  {
    id: 8,
    tags: "Project · 2020",
    tagColor: "lavender",
    title: "Prototype Aplikasi HRIS Berbasis CodeIgniter/PHP",
    desc: "Pengembangan prototipe Human Resource Information System (HRIS) menggunakan CodeIgniter/PHP untuk PT. Hok Tong Cluster Kalimantan, mencakup modul manajemen karyawan, data kepegawaian, dan pelaporan SDM.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },
  {
    id: 9,
    tags: "Project · 2020",
    tagColor: "peach",
    title: "Aplikasi Presensi Virtual Meeting Berbasis CodeIgniter/PHP",
    desc: "Pengembangan aplikasi pencatatan kehadiran peserta virtual meeting berbasis CodeIgniter/PHP untuk PT. Hok Tong Cluster Kalimantan, dibangun sebagai respons kebutuhan absensi digital selama masa peralihan ke kerja jarak jauh.",
    linkLabel: "PT. Hok Tong Cluster Kalimantan",
    linkUrl: "#",
  },
  {
    id: 10,
    tags: "Project · 2022",
    tagColor: "lavender",
    title: "Prototype Aplikasi DSS Menggunakan Metode AHP",
    desc: "Pengembangan prototipe Decision Support System (DSS) berbasis Analytical Hierarchy Process (AHP) menggunakan CodeIgniter/PHP, dirancang untuk membantu pengambilan keputusan multi-kriteria di lingkungan operasional perusahaan.",
    linkLabel: "github.com/royandika",
    linkUrl: "https://github.com/royandika",
  },
  {
    id: 11,
    tags: "Project · 2024",
    tagColor: "gold",
    title: "Prototype AI/ML Prediksi Pembelian Bahan Baku (LSTM)",
    desc: "Pengembangan prototipe sistem prediksi kebutuhan pembelian bahan baku karet menggunakan Long Short-Term Memory (LSTM) berbasis Python. Menjadi dasar riset tesis S2 yang kemudian dipublikasikan di jurnal JIPI 2025.",
    linkLabel: "github.com/royandika",
    linkUrl: "https://github.com/royandika",
  },

  // ── Tambahkan entri baru di bawah ini ────────────────────────────────────
  // {
  //   id: 12,
  //   tags: "Project · 2026",
  //   tagColor: "mint",
  //   title: "Nama Proyek Baru",
  //   desc: "Deskripsi singkat...",
  //   linkLabel: "contoh.com",
  //   linkUrl: "https://contoh.com",
  // },
];