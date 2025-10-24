---
id: admin-plenary-meeting
title: Plenary Meeting - Leader & Committee
sidebar_label: Plenary Meeting
sidebar_position: 6
---

# Plenary Meeting - Leader & Committee

:::info Akses
Fitur ini tersedia untuk **Leader** dan **Committee**. Leader memiliki akses penuh untuk membuat keputusan, sedangkan Committee hanya bisa melihat dan memberikan input.
:::

Panduan ini menjelaskan cara mengelola rapat pleno (plenary meeting) untuk membuat keputusan akhir terhadap aplikasi keanggotaan.

---

## 🎪 Tentang Rapat Pleno

### Apa itu Rapat Pleno?

Rapat Pleno adalah **rapat pengambilan keputusan akhir** untuk aplikasi keanggotaan PERPI. Dalam rapat ini, semua hasil verifikasi (dokumen, office visit, interview) direview dan diputuskan apakah aplikasi:
- ✅ **Approved** - Disetujui menjadi anggota
- ⏸️ **Pending** - Ditunda (butuh dokumen/informasi tambahan)
- ❌ **Rejected** - Ditolak

---

## 📍 Akses Halaman Plenary

### Navigasi ke Plenary:
<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot menu plenary*

1. Login sebagai **Leader** atau **Committee**
2. Di sidebar, klik menu **"Rapat Pleno"**
3. Atau akses langsung: `/leader/plenary`

### Tampilan Halaman:

Anda akan melihat:
- **Header**: "Rapat Pleno"
- **Description**: "Kelola aplikasi yang menunggu keputusan rapat pleno"
- **Badge**: Jumlah aplikasi pending plenary
- **Search Box**: Cari aplikasi
- **Cards**: Daftar aplikasi yang menunggu plenary

---

## 📋 Aplikasi yang Masuk Plenary

### Status yang Masuk Plenary:

Aplikasi dengan status berikut akan muncul di halaman plenary:
- **pending_plenary**: Menunggu dijadwalkan untuk plenary
- **pending**: Pending dari plenary sebelumnya (butuh dokumen tambahan)

### Informasi di Card Aplikasi:

Setiap card menampilkan:
- **Company Name**: Nama perusahaan
- **PIC**: Nama dan email PIC
- **Status**: Badge status
- **Submitted Date**: Tanggal submit aplikasi
- **Plenary Schedule**: Jadwal plenary (jika sudah dijadwalkan)
- **Button**: "View Details" untuk lihat detail lengkap

---

## 📅 Jadwalkan Rapat Pleno

### Langkah 1: Buka Detail Aplikasi

1. Di halaman plenary, cari aplikasi yang ingin dijadwalkan
2. Klik **"View Details"** atau expand card
3. Detail aplikasi akan muncul

### Langkah 2: Set Plenary Schedule

1. Di detail aplikasi, cari section **"Plenary Schedule"**
2. Klik **"Schedule Plenary Meeting"**
3. Dialog akan muncul dengan form:
   - **Meeting Date**: Tanggal rapat
   - **Meeting Time**: Waktu rapat
   - **Location**: Lokasi rapat
   - **Notes**: Catatan tambahan
4. Isi form:
   ```
   Meeting Date: 2024-12-20
   Meeting Time: 10:00
   Location: Kantor PERPI, Ruang Rapat Lt. 3
   Notes: Mohon semua peserta hadir tepat waktu
   ```
5. Klik **"Schedule Meeting"**
6. Jadwal tersimpan
7. Semua peserta (inspector, interviewer, leader, committee) akan menerima email notifikasi

### Email Notifikasi Plenary:
TODO

---

## ✅ Membuat Keputusan (Leader Only)

:::warning Leader Only
Hanya **Leader** yang bisa membuat keputusan akhir. Committee hanya bisa memberikan input dan rekomendasi.
:::

Setelah rapat pleno selesai, Leader membuat keputusan di sistem:

<!-- ![Upload Photos](./screenshots/04-upload-photos.png) -->
*Screenshoot tombol approve*

### Opsi 1: Approve (Setujui)

**Kapan**: Jika semua verifikasi baik dan applicant memenuhi syarat

**Langkah**:
1. Di detail aplikasi, klik tombol **"Approve Application"**
2. Confirmation dialog muncul:
   ```
   Setujui Aplikasi?
   
   Aplikasi akan disetujui dan perusahaan akan menjadi anggota PERPI.
   Status akan berubah menjadi "Approved".
   
   Apakah Anda yakin?
   ```
3. Klik **"Yes, Approve"**
4. Status berubah menjadi **"approved"**
5. Applicant menerima email pemberitahuan:
   ```
   TODO
   ```
6. Finance akan membuat invoice untuk pembayaran

---

### Opsi 2: Pending (Tunda)

**Kapan**: Jika butuh dokumen atau informasi tambahan

**Langkah**:
1. Di detail aplikasi, klik tombol **"Request Additional Files"**
2. Dialog muncul dengan form untuk request dokumen tambahan
3. Anda bisa request **multiple files** sekaligus
4. Untuk setiap file, isi:
   - **File Name**: Nama file yang diminta
   - **File Description**: Deskripsi detail apa yang perlu dilengkapi
6. Klik **"Add More"** untuk menambah file request
7. Klik **"Submit Request"**
8. Status berubah menjadi **"pending"**
9. Applicant menerima email:
   TODO
10. Applicant upload dokumen tambahan
11. Setelah upload, aplikasi kembali ke status **"pending_plenary"**
12. Dijadwalkan untuk plenary berikutnya

---

### Opsi 3: Reject (Tolak)

**Kapan**: Jika applicant tidak memenuhi syarat atau ada masalah serius

**Langkah**:
1. Di detail aplikasi, klik tombol **"Reject Application"**
2. Dialog muncul dengan textarea untuk **Rejection Reason**
3. Isi alasan penolakan dengan jelas dan profesional.
4. Klik **"Submit Rejection"**
5. Confirmation dialog muncul
6. Klik **"Yes, Reject"**
7. Status berubah menjadi **"rejected"**
8. Applicant menerima email:
TODO

---

## 🔍 Filter dan Search

### Search Aplikasi:

1. Gunakan search box di atas
2. Ketik nama perusahaan atau PIC
3. List akan otomatis filter

### Filter by Status:

- **All**: Semua aplikasi
- **Pending Plenary**: Belum dijadwalkan
- **Scheduled**: Sudah dijadwalkan
- **Pending**: Butuh dokumen tambahan

---