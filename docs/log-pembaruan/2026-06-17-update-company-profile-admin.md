---
slug: update-company-profile-admin
title: "Update Profil Perusahaan: Pantau Kelengkapan Profil & Navigasi Form yang Lebih Mudah"
authors: [dev-team]
tags: [company, profile, admin, leader, form, csv, ux]
date: 2026-06-17
---

Pembaruan ini membuat pengelolaan profil perusahaan menjadi lebih mudah dan transparan. Anggota kini bisa langsung tahu seberapa lengkap profil mereka, dan admin mendapatkan tampilan data perusahaan yang jauh lebih lengkap — termasuk kemampuan mengunduh seluruh data sebagai file CSV.

## ℹ️ Informasi Rilis

| Informasi         | Detail                               |
| :---------------- | :----------------------------------- |
| **Tanggal Rilis** | Selasa, 17 Juni 2026                 |
| **Status**        | ✅ Deployed (Production)             |
| **Tipe Update**   | Feature Enhancement & UX Improvement |

---

### 1. Indikator Kelengkapan Profil

Anggota kini dapat melihat **seberapa lengkap profil perusahaan mereka** secara langsung saat mengisi atau mengedit profil. Progress bar dan angka persentase tampil secara real-time di bagian atas form — berubah setiap kali ada field yang diisi.

- Warna progress bar berubah dari **merah → kuning → hijau** seiring profil semakin lengkap.
- Saat profil sudah **100% lengkap**, muncul tanda bintang sebagai konfirmasi.
- Di luar mode edit, badge persentase tetap terlihat di halaman profil untuk pengingat.

<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-06-17-update-company-profile-admin\01_profile_completion_bar.png"
      alt="Progress bar kelengkapan profil di bagian atas form"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p>Progress bar kelengkapan profil yang berubah warna sesuai persentase pengisian secara real-time.</p>
  </div>
</div>

---

### 2. Navigasi Seksi pada Form Edit

Saat mengedit profil, kini tersedia **navigasi seksi** di bagian atas form. Navigasi ini membantu anggota langsung melompat ke bagian yang ingin diisi tanpa harus scroll panjang dari atas ke bawah.

Terdapat tujuh seksi yang bisa diakses langsung:

| Seksi         | Informasi yang Diisi                                   |
| :------------ | :----------------------------------------------------- |
| **Kontak PIC** | Nama dan nomor telepon kontak utama perusahaan        |
| **Identitas**  | Nama perusahaan, website, dan tipe perusahaan         |
| **Lokasi**     | Alamat lengkap perusahaan                             |
| **Layanan**    | Jenis layanan, industri yang dilayani, metodologi     |
| **SDM**        | Komposisi tim dan jenis karyawan                      |
| **Pendapatan** | Rentang pendapatan tahunan                            |
| **Legal**      | Nama legal dan informasi kontak untuk keperluan invoice |

Setiap seksi dilengkapi **tanda merah** jika masih ada informasi yang belum diisi di bagian tersebut — sehingga mudah tahu harus mulai dari mana.

<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-06-17-update-company-profile-admin\02_jump_nav.png"
      alt="Navigasi seksi di atas form edit profil"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p>Navigasi seksi dengan tanda merah pada bagian yang belum lengkap. Klik nama seksi untuk langsung menuju bagian tersebut.</p>
  </div>
</div>

---

### 3. Tampilan Data Perusahaan yang Lebih Lengkap (Admin)

Halaman **Kelola Perusahaan** di dashboard admin kini diperkaya dengan lebih banyak informasi profil perusahaan dalam satu tampilan. Admin tidak perlu lagi membuka profil tiap perusahaan satu per satu — cukup dari tabel, data sudah tersedia dan bisa langsung diurutkan maupun difilter.

Di bagian atas tabel juga ditambahkan ringkasan singkat yang menampilkan jumlah total perusahaan, anggota aktif, dan anggota tidak aktif secara otomatis.

Filter yang tersedia pun kini menampilkan **jumlah perusahaan per kategori** secara langsung, sehingga admin bisa lebih cepat membaca komposisi anggota tanpa perlu menghitung manual.

---

### 4. Ekspor Data Perusahaan ke CSV

Admin kini dapat **mengunduh seluruh data perusahaan** dalam format CSV langsung dari halaman Kelola Perusahaan — cocok untuk keperluan pelaporan, rekap keanggotaan, atau analisis data.
