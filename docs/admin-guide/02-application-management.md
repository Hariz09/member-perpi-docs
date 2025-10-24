---
id: admin-application-management
title: Application Management - Leader & Committee
sidebar_label: Application Management
sidebar_position: 4
---

# Application Management - Leader & Committee

:::info Akses
Untuk **Leader** dan **Committee** (inspector/interviewer). Finance tidak punya akses.
:::

Panduan visual cara mengelola aplikasi keanggotaan.

---

## 📋 Cara Akses Applications

### Step 1: Buka Menu Aplikasi

<!-- ![Applications Menu](./screenshots/03-applications-menu.png) -->
*Screenshot: Menu "Aplikasi" di sidebar*

**Cara Akses**:
1. Login sebagai **Leader**
2. Klik menu **"Aplikasi"**
3. Atau akses: `/leader/applications`

---

### Step 2: Lihat Daftar Aplikasi

<!-- ![Applications List](./screenshots/03-applications-list.png) -->
*Screenshot: Halaman daftar aplikasi dengan tabel*

**Komponen Halaman**:
- **Search box** - Cari aplikasi
- **Filter by Status** - Filter berdasarkan status
- **Tabel aplikasi** dengan kolom:
  - Company Name
  - PIC Name & Email
  - Status (badge berwarna)
  - Submitted At
  - Actions (View Details button)

---

## 🔍 Status Aplikasi

### Status Badge

<!-- ![Status Badges](./screenshots/03-status-badges.png) -->
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

### Step 1: Klik "View Details"

<!-- ![View Details Button](./screenshots/03-view-details-button.png) -->
*Screenshot: Tombol "View Details" di kolom Actions*

---

### Step 2: Lihat Informasi Lengkap

<!-- ![Application Detail Page](./screenshots/03-application-detail.png) -->
*Screenshot: Halaman detail aplikasi dengan semua informasi*

## ▶️ Cara Start Review (Leader Only)

:::warning Leader Only
Hanya **Leader** yang bisa start review.
:::

### Step 1: Klik "Start Review"

<!-- ![Start Review Button](./screenshots/03-start-review-button.png) -->
*Screenshot: Tombol "Start Review" untuk aplikasi dengan status "submitted"*

**Kapan**: Status aplikasi = **submitted**

---

### Step 2: Konfirmasi

<!-- ![Start Review Confirmation](./screenshots/03-start-review-confirmation.png) -->
*Screenshot: Dialog konfirmasi start review*

Klik **"Yes, Start Review"**

---

### Step 3: Status Berubah

<!-- ![Under Review Status](./screenshots/03-under-review-status.png) -->
*Screenshot: Status berubah menjadi "under_review"*

**Setelah Start Review**:
- ✅ Status = **under_review**
- ✅ Leader assigned sebagai reviewer
- ✅ Bisa review dokumen
- ✅ Bisa request revisi atau approve

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