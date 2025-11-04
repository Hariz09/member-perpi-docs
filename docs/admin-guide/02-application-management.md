---
id: admin-application-management
title: Application Management - Leader & Committee
sidebar_label: Application Management
sidebar_position: 4
---

# Application Management - Leader

Panduan visual cara mengelola aplikasi keanggotaan.

---

## 📋 Cara Akses Applications

### Step 1: Buka Menu Aplikasi

![Applications Menu](../img/admin/apllication-management/menu.png)

*Screenshot: Menu "Aplikasi" di sidebar*

**Cara Akses**:
1. Login sebagai **Leader**
2. Klik menu **"Aplikasi"**
3. Atau akses: https://member.perpi.id/leader/applications

---

### Step 2: Lihat Daftar Aplikasi

![Applications List](../img//admin/apllication-management/page.png)

*Screenshot: Halaman daftar aplikasi dengan tabel*

**Komponen Halaman**:
- **Search box** - Cari aplikasi
- **Filter by Status** - Filter berdasarkan status
- **Tabel aplikasi** dengan kolom:
  - Company Name
  - Status (badge berwarna)
  - Submitted At
  - Actions (View Details button)

---

## 🔍 Status Aplikasi

### Status Badge

![Status Badges](../img/admin/apllication-management/status-badge.png)

*Screenshot: Berbagai badge status dengan warna*

| Status | Badge | Aksi |
|--------|-------|------|
| **submitted** | 🔵 Biru | **Start Review** (Leader) |
| **under_review** | 🟣 Ungu | **Complete Review** |
| **under_revision** | 🟠 Orange | Member upload ulang |
| **office_visit_scheduled** | 🟢 Hijau | **Assign Inspector** (Leader) |
| **interview_scheduled** | 🔵 Biru | **Assign Interviewer** (Leader) |
| **pending_plenary** | 🟣 Ungu | **Schedule Plenary** |
| **approved** | 🟢 Hijau | Selesai ✅ |
| **rejected** | 🔴 Merah | Selesai ❌ |

---

## 🔎 Cara Lihat Detail Aplikasi

### Step 1: Klik "Lihat Detail"

![Lihat Detail Button](../img/admin/apllication-management/detail-button.png)

*Screenshot: Tombol "Lihat Detail" di kolom Actions*

Jika diklik, akan muncul halaman detail aplikasi.

---

### Step 2: Lihat Informasi Lengkap

![Application Detail Page](../img/admin/apllication-management/apllication-page.png)
*Screenshot: Halaman detail aplikasi dengan semua informasi*

#### Penjelasan Komponen Header
![Application Detail Header](../img/admin/apllication-management/header.png)

1. Kembali Button
Tombol untuk kembali ke halaman sebelumnya (biasanya daftar aplikasi).

2. Dashboard Leader Button
Shortcut menuju dashboard utama Leader untuk melihat ringkasan aktivitas dan status aplikasi.

3. Tolak Aplikasi Button
Tombol untuk menolak aplikasi secara permanen. Hanya muncul jika status aplikasi masih dalam tahap peninjauan (submitted atau under_review).

4. Company Name
Nama perusahaan yang mengajukan keanggotaan, ditampilkan tebal sebagai judul utama.

5. Alamat Perusahaan
Lokasi perusahaan yang diambil dari data pendaftaran. Dapat diklik untuk membuka lokasi di Google Maps.

6. Detail PIC (Person in Charge)
Bagian yang menampilkan informasi kontak penanggung jawab perusahaan:
  - Nama PIC
  - Alamat email
  - Nomor telepon

7. Status Keanggotaan
Badge berwarna oranye dengan label PENDAFTAR, menandakan bahwa perusahaan sedang dalam proses pendaftaran dan belum resmi menjadi anggota.

8. Status Aplikasi
Status aplikasi saat ini

9. Peran Pengguna (User Role)
Badge yang menampilkan peran pengguna saat ini, misalnya Inspector - Fulan . Ini menunjukkan pengguna yang sedang mengakses halaman berstatus sebagai inspector.

10. Peringatan Status Aplikasi (Alert Box)
Kotak peringatan berwarna kuning yang muncul jika aplikasi sedang menunggu tinjauan. Menjelaskan bahwa aplikasi telah dikirim dan menunggu proses peninjauan.

12. Tombol Mulai Tinjau
Tombol utama untuk memulai proses review. Jika ditekan, status aplikasi akan berubah dari submitted menjadi Sedang Ditinjau, dan Leader akan ditugaskan sebagai reviewer.

---

## 📝 Cara Review Dokumen

### Step 1: Buka Section Documents

<!-- ![Documents Section](./screenshots/03-review-documents.png) -->
*Screenshot: Section documents dengan list 9 dokumen*

---

### Step 2: Preview Setiap Dokumen

<!-- ![Document Preview Modal](./screenshots/03-document-preview-modal.png) -->
*Screenshot: Modal preview dokumen PDF*

**Cara**:
1. Klik **"Preview"** pada dokumen
2. Periksa kelengkapan dan kualitas
3. Catat jika ada yang perlu diperbaiki

---

## ✅ Cara Complete Review

Setelah review dokumen, ada 2 opsi:

### Opsi 1: Request Revisi

<!-- ![Request Revision Button](./screenshots/03-request-revision-button.png) -->
*Screenshot: Tombol "Request Revision"*

**Kapan**: Dokumen tidak lengkap/tidak sesuai

---

#### Step 1: Klik "Request Revision"

<!-- ![Request Revision Dialog](./screenshots/03-request-revision-dialog.png) -->
*Screenshot: Dialog request revision dengan textarea notes*

---

#### Step 2: Isi Reviewer Notes

<!-- ![Reviewer Notes](./screenshots/03-reviewer-notes.png) -->
*Screenshot: Contoh isi reviewer notes*

**Contoh**:
```
- NPWP tidak jelas, upload ulang dengan resolusi tinggi
- Surat Domisili expired, upload yang baru
- Company Profile belum ada portofolio
```

---

#### Step 3: Submit

<!-- ![Revision Submitted](./screenshots/03-revision-submitted.png) -->
*Screenshot: Status berubah menjadi "under_revision"*

**Hasil**:
- Status = **under_revision**
- Applicant terima email
- Applicant upload ulang
- Status kembali ke **submitted**

---

### Opsi 2: Approve untuk Office Visit

<!-- ![Approve for Office Visit](./screenshots/03-approve-office-visit-button.png) -->
*Screenshot: Tombol "Approve for Office Visit"*

**Kapan**: Semua dokumen lengkap dan sesuai

---

#### Step 1: Klik "Approve for Office Visit"

<!-- ![Approve Confirmation](./screenshots/03-approve-confirmation.png) -->
*Screenshot: Dialog konfirmasi approve*

---

#### Step 2: Konfirmasi

<!-- ![Office Visit Scheduled](./screenshots/03-office-visit-scheduled.png) -->
*Screenshot: Status berubah menjadi "office_visit_scheduled"*

**Hasil**:
- Status = **office_visit_scheduled**
- Siap assign inspector

---

## 🏢 Cara Assign Inspector (Leader Only)

:::warning Leader Only
Hanya **Leader** yang bisa assign inspector.
:::

### Step 1: Klik "Assign Inspector"

<!-- ![Assign Inspector Button](./screenshots/03-assign-inspector-button.png) -->
*Screenshot: Tombol "Assign Inspector" di section Office Visit*

**Kapan**: Status = **office_visit_scheduled**

---

### Step 2: Pilih Inspector

<!-- ![Select Inspector Dialog](./screenshots/03-select-inspector-dialog.png) -->
*Screenshot: Dialog dengan dropdown list inspector*

**Pilihan**: Semua user dengan role **Leader** atau **Committee**

---

### Step 3: Assign

<!-- ![Inspector Assigned](./screenshots/03-inspector-assigned.png) -->
*Screenshot: Inspector berhasil ditugaskan*

**Hasil**:
- Inspector ditugaskan
- Inspector terima email notifikasi
- Inspector bisa akses halaman office visit

<!-- ![Inspector Email](./screenshots/03-inspector-email.png) -->
*Screenshot: Email notifikasi untuk inspector*

---

## 👤 Cara Assign Interviewer (Leader Only)

:::warning Leader Only
Hanya **Leader** yang bisa assign interviewer.
:::

### Step 1: Klik "Assign Interviewer"

<!-- ![Assign Interviewer Button](./screenshots/03-assign-interviewer-button.png) -->
*Screenshot: Tombol "Assign Interviewer" di section Interview*

**Kapan**: Status = **interview_scheduled**

---

### Step 2: Isi Form Interview

<!-- ![Assign Interviewer Dialog](./screenshots/03-assign-interviewer-dialog.png) -->
*Screenshot: Dialog assign interviewer dengan form lengkap*

**Field**:
- **Interviewers** (multi-select) - Bisa pilih > 1
- **Scheduled Date** - Tanggal interview
- **Scheduled Time** - Waktu interview
- **Location** - Lokasi interview
- **Notes** - Catatan tambahan

---

### Step 3: Assign

<!-- ![Interviewer Assigned](./screenshots/03-interviewer-assigned.png) -->
*Screenshot: Interviewer berhasil ditugaskan*

**Hasil**:
- Interviewer(s) ditugaskan
- Semua interviewer terima email
- Applicant terima email jadwal
- Interviewer bisa akses halaman interview

<!-- ![Interviewer Email](./screenshots/03-interviewer-email.png) -->
*Screenshot: Email notifikasi untuk interviewer*

---