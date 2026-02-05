---
id: admin-payment-management
title: Payment Management - Finance, Leader & Committee
sidebar_label: Payment Management
sidebar_position: 7
---

# Payment Management - Finance, Leader & Committee

:::info Akses
Fitur ini tersedia untuk **Finance**, **Leader**, dan **Committee**. Semua role bisa mengelola pembayaran, upload invoice, dan verifikasi bukti bayar.
:::

Panduan ini menjelaskan cara mengelola iuran tahunan, upload invoice, verifikasi pembayaran, dan generate sertifikat keanggotaan.

---

## 💰 Tentang Iuran Tahunan

### Jenis Iuran:

1. **Iuran Tahun Pertama**: Rp 7.500.000
   - Biaya pendaftaran: Rp 2.500.000
   - Iuran tahun pertama: Rp 5.000.000
   - Dibayar setelah aplikasi approved

2. **Iuran Tahunan (Renewal)**: Rp 5.000.000
   - Dibayar setiap tahun
   - Jatuh tempo 1 tahun setelah pembayaran terakhir

### Status Pembayaran:

| Status | Deskripsi | Aksi yang Perlu Dilakukan |
|--------|-----------|---------------------------|
| **waiting_invoice** | Menunggu invoice dibuat | Finance upload invoice |
| **unpaid** | Invoice sudah ada, belum dibayar | Member bayar dan upload bukti |
| **pending_verification** | Bukti bayar sudah diupload | Finance verifikasi |
| **confirmed** | Pembayaran sudah diverifikasi | Generate sertifikat |

---

## 📍 Akses Halaman Payment Management

### Untuk Finance:

1. Login sebagai **Finance**
2. Dashboard langsung menampilkan payment overview
3. Atau klik menu **"Iuran Tahunan"**
4. Akses: `/finance`

### Untuk Leader/Committee:

1. Login sebagai **Leader** atau **Committee**
2. Di sidebar, klik menu **"Iuran Tahunan"**
3. Akses: `/leader/annual-fee`

### Tampilan Halaman:
<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot menu payment*

Anda akan melihat:
- **Header**: "Manajemen Iuran Tahunan"
- **Description**: "Kelola pembayaran iuran tahunan, upload invoice, dan review bukti pembayaran"
- **Statistics Cards**:
  - Total Iuran
  - Paid
  - Unpaid
  - Waiting Invoice
  - Pending Verification
  - Total Revenue
- **Action Buttons**:
  - "Create New Payment"
  - "Send Bulk Notification"
  - "Bulk Create Certificates"
- **Data Table**: Daftar semua iuran tahunan

---

## ➕ Membuat Iuran Tahunan Baru

### Kapan Membuat:

- Setelah aplikasi approved (untuk tahun pertama)
- Menjelang jatuh tempo renewal (untuk tahun berikutnya)
- Manual create untuk anggota lama

### Langkah Create Payment:

1. Klik tombol **"Create New Payment"**
2. Dialog akan muncul dengan form:
   - **Company**: Dropdown pilih perusahaan
   - **Year**: Tahun iuran (default: tahun sekarang)
   - **Amount**: Jumlah iuran (default: Rp 5.000.000)
3. Isi form:
   ```
   Company: [Pilih perusahaan dari dropdown]
   Year: 2024
   Amount: 5000000
   ```
4. Untuk tahun pertama, ubah amount menjadi **7500000**
5. Klik **"Create Payment"**
6. Payment record dibuat dengan status **"waiting_invoice"**
7. Finance perlu upload invoice

:::tip Automatic Creation
Untuk aplikasi yang baru approved, sistem bisa otomatis membuat payment record. Tapi Anda juga bisa create manual jika perlu.
:::

<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot form create payment*

---

## 📄 Upload Invoice
<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot form upload invoice*

1. Di tabel iuran tahunan, cari payment dengan status **"waiting_invoice"**
2. Di kolom Actions, klik icon **"Upload Invoice"** (upload icon)
3. Dialog upload akan muncul
4. Klik **"Choose File"** atau drag & drop file PDF
5. Pilih file invoice yang sudah dibuat
6. Klik **"Upload"**
7. File akan diupload ke sistem
8. Status berubah menjadi **"unpaid"**
9. Member akan menerima email notifikasi:
TODO

:::tip Bulk Notification
Jika ada banyak invoice yang perlu dibuat, gunakan tombol **"Send Bulk Notification"** untuk mengirim notifikasi ke semua Finance user tentang payment yang waiting_invoice.
:::

---

## 💳 Proses Pembayaran (Member Side)
<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot proses pembayaran*

Setelah invoice diupload, member akan:

1. Login ke sistem
2. Download invoice
3. Lakukan transfer bank sesuai invoice
4. Upload bukti pembayaran (foto/scan bukti transfer)
5. Status berubah menjadi **"pending_verification"**
6. Finance akan menerima notifikasi untuk verifikasi

---

## ✅ Verifikasi Bukti Pembayaran
<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot form verifikasi pembayaran*

### Langkah 1: Lihat Bukti Pembayaran

1. Di tabel iuran tahunan, cari payment dengan status **"pending_verification"**
2. Di kolom Actions, klik icon **"View Receipt"** (eye icon)
3. Bukti pembayaran akan muncul di modal/new tab
4. Periksa bukti pembayaran:
   - Nama pengirim sesuai dengan perusahaan
   - Jumlah transfer sesuai dengan invoice
   - Tanggal transfer
   - Bank tujuan sesuai
   - Bukti jelas dan tidak blur

### Langkah 2: Accept atau Reject

#### Opsi 1: Accept (Terima)

**Jika bukti pembayaran valid**:

1. Klik tombol **"Accept Payment"** (hijau)
2. Dialog akan muncul dengan form:
   - **Issued Date**: Tanggal sertifikat diterbitkan (default: hari ini)
   - **Expires Date**: Tanggal sertifikat expired (default: 1 tahun dari issued date)
3. Anda bisa custom tanggal jika perlu:
   ```
   Issued Date: 2024-01-15
   Expires Date: 2025-01-15
   ```
4. Klik **"Confirm Accept"**
5. Status berubah menjadi **"confirmed"**
6. Sistem otomatis:
   - Update `paid_at` dengan tanggal dari issued date
   - Update `confirmed_at` dengan timestamp sekarang
   - Update `confirmed_by` dengan user ID Anda
   - **Generate sertifikat** otomatis dengan tanggal yang Anda set
7. Member menerima email:
   TODO

:::tip Automatic Certificate
Sertifikat otomatis dibuat saat Anda accept payment. Anda tidak perlu generate manual lagi.
:::

---

#### Opsi 2: Reject (Tolak)

**Jika bukti pembayaran tidak valid**:

1. Klik tombol **"Reject Payment"** (merah)
2. Confirmation dialog muncul:
   ```
   Tolak Bukti Pembayaran?
   
   Bukti pembayaran akan ditolak dan member perlu upload ulang.
   Status akan kembali ke "Unpaid".
   
   Apakah Anda yakin?
   ```
3. Klik **"Yes, Reject"**
4. Status kembali ke **"unpaid"**
5. Bukti pembayaran dihapus dari sistem
6. Member menerima email:
   TODO

---

## 📜 Generate Sertifikat

### Automatic Generation:

Sertifikat **otomatis dibuat** saat Finance accept payment. Anda tidak perlu generate manual.

### Manual Generation (Jika Perlu):

Jika sertifikat belum dibuat atau perlu dibuat ulang:

1. Di tabel iuran tahunan, cari payment dengan status **"confirmed"**
2. Cek kolom **"Certificate"**
3. Jika belum ada sertifikat, klik **"Generate Certificate"**
4. Sertifikat akan dibuat
5. Member bisa download sertifikat

### Bulk Generate Certificates:

Jika ada banyak payment yang perlu dibuat sertifikatnya:

1. Klik tombol **"Bulk Create Certificates"** di atas tabel
2. Confirmation dialog muncul
3. Klik **"Yes, Create"**
4. Sistem akan generate sertifikat untuk semua payment yang:
   - Status: **confirmed**
   - Belum punya sertifikat
5. Toast notification akan muncul untuk setiap sertifikat yang dibuat


<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot tabel payment*
---

## 📊 Informasi di Tabel

### Kolom Tabel:

| Kolom | Deskripsi |
|-------|-----------|
| **Company** | Nama perusahaan |
| **Year** | Tahun iuran |
| **Amount** | Jumlah iuran (Rp) |
| **Status** | Status pembayaran (badge berwarna) |
| **Invoice** | Download invoice (jika ada) |
| **Receipt** | View bukti bayar (jika ada) |
| **Certificate** | Download sertifikat (jika ada) |
| **Paid At** | Tanggal bayar |
| **Actions** | Tombol aksi |

### Badge Status:

- 🟡 **Waiting Invoice** (kuning) - Perlu upload invoice
- 🔴 **Unpaid** (merah) - Belum dibayar
- 🟠 **Pending Verification** (orange) - Perlu verifikasi
- 🟢 **Confirmed** (hijau) - Sudah dibayar dan verified

---

## 🔍 Filter dan Search

### Search Payment:

1. Gunakan search box di atas tabel
2. Ketik nama perusahaan
3. Tabel akan otomatis filter

### Filter by Status:

1. Klik dropdown "Filter by Status"
2. Pilih status:
   - All Status
   - Waiting Invoice
   - Unpaid
   - Pending Verification
   - Confirmed
3. Tabel akan menampilkan payment sesuai status

### Filter by Year:

1. Klik dropdown "Filter by Year"
2. Pilih tahun
3. Tabel akan menampilkan payment tahun tersebut

---

**Selamat mengelola pembayaran! 🎉**