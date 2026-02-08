---
id: admin-getting-started
title: Getting Started - Admin PERPI
sidebar_label: 1. Getting Started
sidebar_position: 1
---

# Getting Started - Admin PERPI

Panduan visual untuk memulai menggunakan sistem admin PERPI.

:::tip
Sebelum memulai pastikan anda sudah membuat/meminta akun ke pengurus perpi, untuk detail autentikasi silakan baca [Panduan Autentikasi](../tutorial-autentikasi-perpi.md)
:::
---

# Overview Dashboard

Halaman ini menjelaskan antarmuka utama sistem PERPI yang disesuaikan berdasarkan hak akses pengguna: **Leader**, **Committee**, dan **Finance**.

---

## 👑 Dashboard Leader

Pusat pemantauan eksekutif untuk melihat kesehatan organisasi secara menyeluruh.

<img src="/img/admin/leader/dashboard.png" alt="Dashboard Leader" className="img-large" />

### Komponen Utama

:::info Struktur Halaman
Dashboard Leader terbagi menjadi dua area strategi: **Monitoring (Metrik)** di bagian atas dan **Action Items (Tugas)** di bagian bawah.
:::

**Komponen Utama**:

1.  **Sidebar Toggle & Header**
    * Tombol untuk menyembunyikan/menampilkan navigasi dan identitas "Admin PERPI".

2.  **Navigasi Utama (Sidebar)**
    * Menu navigasi lengkap untuk mengakses seluruh modul aplikasi.

3.  **Welcome Banner & Status Panel**
    * **Greeting:** Sapaan personal ("Halo, Leader") dengan ringkasan aktivitas.
    * **System Status:** Indikator "Sistem Aktif" dan jumlah total anggota.
    * **Real-time Clock:** Widget waktu (Jam/Tanggal) zona WIB (UTC+7).

4.  **Metrik Utama (Total Keseluruhan)**
    * Berisi 4 kartu ringkasan data historis/total:
        * **Total Aplikasi:** Jumlah seluruh aplikasi keanggotaan.
        * **Disetujui:** Jumlah aplikasi yang berhasil menjadi anggota.
        * **Total Perusahaan:** Jumlah perusahaan terdaftar.
        * **Anggota Aktif:** Status keanggotaan yang aktif saat ini.

5.  **Memerlukan Perhatian (Action Items)**
    * Berisi 4 kartu notifikasi untuk tugas yang tertunda (Counter angka berwarna oranye/ungu/biru):
        * **Aplikasi Baru:** Permohonan masuk yang belum diproses.
        * **Menunggu Pleno:** Kandidat yang menunggu jadwal/hasil rapat.
        * **Wawancara:** Jadwal atau hasil wawancara yang pending.
        * **Kunjungan Kantor:** Tugas kunjungan yang perlu ditindaklanjuti.

**Daftar Menu Navigasi**:

- 🏠 **Beranda**
- 📋 **Aplikasi**
- ✅ **Daftar Tugas**
- 📍 **Kunjungan Kantor**
- 👤 **Wawancara**
- 📅 **Rapat Pleno**
- 🏢 **Perusahaan**
- 👥 **Pengguna**
- 💳 **Iuran Tahunan**
- 📝 **Logs** *(Dropdown)*

---

## 👷 Dashboard Committee

Halaman kerja operasional (Daftar Tugas) untuk pengurus yang fokus pada inspeksi lapangan dan verifikasi.

<img src="/img/admin/committee/dashboard.png" alt="Dashboard Committee" className="img-large" />

### Manajemen Tugas

:::tip Tips Produktivitas
Gunakan tombol **Refresh** di sebelah kanan atas daftar tugas untuk memastikan Anda melihat data penugasan terbaru tanpa perlu memuat ulang (*reload*) halaman browser.
:::

#### 1. Ringkasan Penugasan
Tiga kartu indikator beban kerja saat ini:
* 📍 **Inspeksi:** Tugas kunjungan fisik ke kantor pendaftar.
* 👤 **Wawancara:** Sesi wawancara calon anggota.
* 📋 **Rapat Pleno:** Agenda rapat validasi anggota.

#### 2. Filter & Pencarian
Gunakan panel filter untuk menemukan tugas spesifik:
* **Pencarian:** Input nama perusahaan.
* **Jenis Tugas:** Filter kategori (misal: hanya tampilkan "Wawancara").
* **Status:** Memisahkan tugas *Pending* dan *Selesai*.

---

## 💰 Dashboard Finance

Area khusus untuk Tim Keuangan dalam mengelola tagihan (Invoice) dan validasi pembayaran iuran anggota.

<img src="/img/admin/finance/dashboard.png" alt="Dashboard Finance" className="img-large" />

### Tabel Invoice
Menampilkan daftar tagihan dengan rincian:

* **Perusahaan:** Nama entitas & Tahun Buku (misal: 2027).
* **No. Invoice:** Kode unik referensi `AFP-YYYY.XXXX`.
* **Jumlah:** Nominal tagihan (IDR).
* **Status:** Indikator warna (e.g., 🔴 *Belum Dibayar*, 🟢 *Lunas*).
* **Aksi:** Tombol aksi berdasarkan status (misal: *Upload Invoice*, *Verifikasi Pembayaran*).

---

:::note 📧 Notifikasi Sistem Otomatis
Sistem akan mengirimkan notifikasi email secara otomatis untuk trigger penting (Penugasan baru, Invoice terbit, Status berubah).

Seluruh notifikasi resmi dikirim dari: **`notifications@perpi.id`**

> **Penting:** Mohon informasikan pengguna untuk menambahkan email tersebut ke *Whitelist/Contacts* agar tidak masuk ke folder Spam.
:::