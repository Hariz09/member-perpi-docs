---
slug: update-revisi-mandiri
title: Fitur Revisi Mandiri, Edit Legal & Audit Log
authors: [dev-team]
tags: [invoice, sertifikat, legal, finance, audit-log]
date: 2026-02-05
---

Pembaruan ini menghadirkan fitur manajemen data mandiri (*self-service*) untuk tim Finance, mengurangi ketergantungan pada tim developer untuk revisi administratif.

## ℹ️ Informasi Rilis

| Informasi | Detail |
| :--- | :--- |
| **Tanggal Rilis** | Kamis, 5 Februari 2026 |
| **Status** | ✅ Deployed (Production) |
| **Target User** | Finance, Leader |

---

### 1. Revisi Invoice & Sertifikat (Self-Service)

Fitur ini memungkinkan Anda mencetak ulang dokumen PDF invoice dan sertifikat dengan data terbaru.

<div className="row">
  <div className="col col--6">
    <h4>🚫 Masalah Sebelumnya</h4>
    <p>Typo nama perusahaan > Lapor IT > IT update database > IT generate ulang PDF.</p>
  </div>
  <div className="col col--6">
    <h4>✅ Solusi Sekarang</h4>
    <p>User edit data > Klik tombol revisi > PDF baru terbit instan.</p>
  </div>
</div>

:::danger Penting
Tombol revisi hanya **mencetak ulang** data yang ada. Pastikan Anda sudah memperbaiki data perusahaan (lihat poin 2) **SEBELUM** menekan tombol Revisi.
:::

**Langkah-langkah:**

1. Login sebagai Finance di <a href="http://member.perpi.id/" target="_blank">member.perpi.id</a>.
2. Masuk ke menu **Annual Fee**.
3. Cari baris tagihan perusahaan yang ingin diperbaiki.
4. Cek kolom **Action**. Tombol akan muncul otomatis berdasarkan **Status Tagihan** seperti panduan di bawah ini.

<br/>

<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__header">
    <h3>A. Kondisi: Status Belum Dibayar</h3>
  </div>
  <div className="card__image">
    <img src="/img/pembaruan/2026-02-05-revisi-mandiri/invoice_tombol_revisi.png" alt="Tombol Revisi Invoice" className="img-large" style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} />
  </div>
  <div className="card__body">
    <p>Jika status: <span className="badge badge--danger">Belum Dibayar</span> (Merah)</p>
    <p>Sistem menampilkan tombol **Revisi Invoice**. Gunakan ini untuk memperbaiki Invoice tagihan yang belum lunas.</p>
  </div>
</div>

<div className="card shadow--md">
  <div className="card__header">
    <h3>B. Kondisi: Status Lunas / Sertifikat Ada</h3>
  </div>
  <div className="card__image">
    <img src="/img/pembaruan/2026-02-05-revisi-mandiri/certificate_tombol_revisi.png" alt="Tombol Revisi Sertifikat" className="img-large" style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} />
  </div>
  <div className="card__body">
    <p>Jika status: <span className="badge badge--success">Terkonfirmasi</span> (Hijau)</p>
    <p>Sistem menampilkan tombol **Perbarui Sertifikat**. Gunakan ini untuk memperbaiki Sertifikat yang sudah terbit.</p>
  </div>
</div>

<br/>
<hr/>

### 2. Edit Informasi Legal Perusahaan

Khusus role **Finance**, kolom data legal yang sebelumnya terkunci kini dapat diedit melalui menu Dashboard.

**Cara Penggunaan:**
Pergi ke Sidebar > Menu **Perusahaan** > Pilih Perusahaan > Klik **Edit**.

<div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <img src="/img/pembaruan/2026-02-05-revisi-mandiri/company_edit_sidebar.png" alt="Sidebar" className="img-xs" />
  <img src="/img/pembaruan/2026-02-05-revisi-mandiri/company_edit_tombol_edit.png" alt="Tombol Edit" className="img-small" />
</div>

### 3. Monitoring Perubahan (Audit Log)

Sistem kini mencatat "Jejak Digital" setiap perubahan untuk keamanan data. Setiap kali data perusahaan diedit, sistem merekam **Siapa** (User), **Kapan** (Waktu), dan **Apa** (Perubahan Data).

Anda dapat memantau aktivitas ini melalui menu **Logs** di sidebar.

<img src="/img/pembaruan/2026-02-05-revisi-mandiri/company_edit_log.png" alt="Log Audit" className="img-large" />

**Tampilan Detail Perubahan:**
Klik icon mata untuk melihat detail. Sistem akan menyoroti perbedaan antara **Data Lama (Merah)** dan **Data Baru (Hijau)**.

<img src="/img/pembaruan/2026-02-05-revisi-mandiri/company_edit_log_modal.png" alt="Detail Modal Log Audit" className="img-large" />

:::note Keamanan Data
Log audit bersifat *immutable* (permanen). Data ini tidak dapat dihapus atau dimanipulasi oleh user manapun demi keamanan.
:::