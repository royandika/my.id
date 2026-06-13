/**
 * activities.js — Data Kegiatan & Aktivitas Roy Andika, S.Kom., M.Kom.
 * ================================================================
 * Untuk menambah / edit / hapus entri, cukup ubah array ACTIVITIES.
 * Tidak perlu menyentuh index.html maupun activities.html.
 * ================================================================
 *
 * Properti tiap objek:
 *   id             {number}  - Nomor urut
 *   name           {string}  - Nama kegiatan / sertifikasi / seminar
 *   type           {string}  - Jenis kegiatan: seminar | training | kompetensi | workshop | webinar | lainnya
 *   organizer      {string}  - Penyelenggara
 *   date           {string}  - Tanggal (format: "DD Month YYYY" atau "Month YYYY")
 *   location       {string}  - Tempat pelaksanaan (kota / online)
 *   description    {string}  - Deskripsi singkat kegiatan
 *   credential_url {string}  - URL sertifikat / credential (atau "#" jika tidak ada)
 */

const ACTIVITIES = [

  // ── KOMPETENSI / SERTIFIKASI ──────────────────────────────────────

  {
    id: 1,
    name: "Sertifikasi Kompetensi Program Analyst",
    type: "kompetensi",
    organizer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2022",
    location: "Indonesia",
    description: "Uji kompetensi profesi di bidang analisis dan perancangan sistem perangkat lunak berdasarkan Kerangka Kualifikasi Nasional Indonesia (KKNI). Mencakup kompetensi analisis kebutuhan, perancangan sistem, dan pengujian aplikasi.",
    credential_url: "#",
  },
  {
    id: 2,
    name: "AEPT — Academic English Proficiency Test",
    type: "kompetensi",
    organizer: "Universitas AMIKOM Yogyakarta",
    date: "2023",
    location: "Yogyakarta",
    description: "Uji kemampuan Bahasa Inggris akademik sebagai persyaratan akademik program Magister Informatika. Hasil: intermediate / upper-intermediate.",
    credential_url: "#",
  },

  // ── TRAINING ──────────────────────────────────────────────────────

  {
    id: 3,
    name: "IT Essentials — Cisco Networking Academy",
    type: "training",
    organizer: "Kemenkominfo / Cisco Networking Academy",
    date: "2020",
    location: "Online",
    description: "Pelatihan intensif 189 jam mencakup fundamental hardware komputer, jaringan, sistem operasi, keamanan siber, dan troubleshooting infrastruktur IT. Bagian dari program Digital Talent Scholarship Kemenkominfo.",
    credential_url: "#",
  },
  {
    id: 4,
    name: "Belajar Penerapan AI Praktis — Dicoding",
    type: "training",
    organizer: "Dicoding Indonesia",
    date: "2026",
    location: "Online",
    description: "Pelatihan penerapan kecerdasan buatan secara praktis mencakup penggunaan Large Language Model, prompt engineering, dan integrasi AI ke dalam alur kerja profesional.",
    credential_url: "#",
  },
  {
    id: 5,
    name: "Belajar Generative AI — Dicoding",
    type: "training",
    organizer: "Dicoding Indonesia",
    date: "2026",
    location: "Online",
    description: "Pelatihan teknologi Generative AI meliputi konsep foundational model, cara kerja LLM, retrieval-augmented generation (RAG), dan implementasi solusi berbasis AI generatif.",
    credential_url: "#",
  },
  {
    id: 6,
    name: "Ethical Hacking & Cybersecurity Awareness",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Micro-skill training tentang teknik ethical hacking, identifikasi kerentanan sistem, dan langkah-langkah mitigasi ancaman keamanan siber di lingkungan infrastruktur IT.",
    credential_url: "#",
  },
  {
    id: 7,
    name: "AI Engineering Fundamentals",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Pelatihan dasar-dasar AI engineering mencakup pipeline machine learning, deployment model, MLOps, dan integrasi model AI ke dalam aplikasi produksi.",
    credential_url: "#",
  },
  {
    id: 8,
    name: "Internet of Things (IoT) Development",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Micro-skill pelatihan pengembangan sistem IoT meliputi protokol komunikasi (MQTT, HTTP), integrasi sensor, platform IoT cloud, dan studi kasus implementasi di industri.",
    credential_url: "#",
  },
  {
    id: 9,
    name: "Linux System Administration",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Pelatihan administrasi sistem Linux mencakup manajemen user, permission, service, shell scripting, dan konfigurasi server berbasis Debian/Ubuntu untuk keperluan produksi.",
    credential_url: "#",
  },
  {
    id: 10,
    name: "AI Security & Privacy",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Pelatihan keamanan sistem berbasis AI meliputi ancaman adversarial, keamanan data latih, privasi dalam machine learning, dan best practices deployment AI yang aman.",
    credential_url: "#",
  },
  {
    id: 11,
    name: "Data Science & Analytics",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2025",
    location: "Online",
    description: "Micro-skill data science mencakup eksplorasi dan visualisasi data, feature engineering, pemodelan statistik, serta interpretasi hasil analisis untuk pengambilan keputusan bisnis.",
    credential_url: "#",
  },
  {
    id: 12,
    name: "Cloud Computing Fundamentals",
    type: "training",
    organizer: "DTS Komdigi — Digital Talent Scholarship",
    date: "2026",
    location: "Online",
    description: "Pelatihan komputasi awan mencakup arsitektur cloud (IaaS, PaaS, SaaS), layanan utama cloud provider, keamanan cloud, serta strategi migrasi dan hybrid cloud.",
    credential_url: "#",
  },

  // ── SEMINAR / WEBINAR ─────────────────────────────────────────────

  {
    id: 13,
    name: "Seminar Nasional Teknologi Informasi dan Komunikasi",
    type: "seminar",
    organizer: "Universitas AMIKOM Yogyakarta",
    date: "2024",
    location: "Yogyakarta",
    description: "Seminar nasional dengan topik perkembangan teknologi informasi terkini, kecerdasan buatan, dan transformasi digital di sektor industri. Diikuti sebagai peserta dan presenter riset.",
    credential_url: "#",
  },

  // ── Tambahkan entri baru di bawah ini ────────────────────────────
  // {
  //   id: 14,
  //   name: "Nama Kegiatan",
  //   type: "workshop",
  //   organizer: "Penyelenggara",
  //   date: "Juni 2026",
  //   location: "Kota / Online",
  //   description: "Deskripsi singkat kegiatan...",
  //   credential_url: "#",
  // },
];
