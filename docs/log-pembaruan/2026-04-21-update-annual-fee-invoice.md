---
slug: update-annual-fee-invoice
title: Laporan Pembaruan Sistem — 21 April 2026
authors: [dev-team]
tags: [annual-fee, invoice, bug-fix, sync, qualify]
date: 2026-04-21
---

Pembaruan ini mencakup perbaikan mekanisme sinkronisasi data ke platform **Qualify** serta optimalisasi sistem pengiriman lampiran *invoice* melalui email otomatis.

## Informasi Rilis

| Komponen | Keterangan |
| :--- | :--- |
| **Tanggal Rilis** | Selasa, 21 April 2026 |
| **Status** | ✅ Deployed (Production) |
| **Tipe Update** | *Bug Fix & System Enhancement* |

---

## Identifikasi Masalah

Berdasarkan laporan operasional dan hasil audit sistem, ditemukan dua kendala utama yang menghambat efisiensi administratif:

* **Diskoneksi Data Qualify:** Status keanggotaan pada aplikasi manajemen berubah menjadi "Aktif" setelah pembayaran, namun tanggal kedaluwarsa (*expiry date*) tidak tersinkronisasi secara otomatis ke platform eksternal (**Qualify**).
* **Anomali Lampiran Email:** Dokumen *invoice* pada email otomatis tidak dapat diakses atau terdeteksi sebagai berkas rusak (*corrupted*) akibat pemaksaan format PDF pada dokumen asli non-PDF.

---

## Langkah Penyelesaian

Tim pengembang telah menerapkan solusi teknis berikut untuk memastikan integritas data dan kelancaran operasional:

### 1. Integrasi Real-Time ke Platform Qualify
Logika pada *backend* telah diperbarui untuk memastikan setiap transaksi *annual fee* yang berhasil akan memicu pembaruan *expiry date* ke sistem Qualify secara instan. Hal ini memastikan validitas status anggota di seluruh platform yang terhubung secara serentak.

### 2. Rekonsiliasi Data Menyeluruh
Telah dilakukan sinkronisasi massal untuk seluruh basis data perusahaan guna mengoreksi anomali data historis. Langkah ini memastikan seluruh anggota yang telah menyelesaikan pembayaran memiliki masa berlaku yang akurat dan sinkron dengan platform Qualify.

### 3. Perbaikan Handling Berkas Invoice
Sistem kini secara otomatis mengidentifikasi format asli dokumen yang diunggah oleh tim keuangan. Pengiriman lampiran melalui email akan mengikuti format asli (seperti JPG atau PNG) tanpa melakukan konversi paksa ke PDF, sehingga dokumen dapat dibuka dengan normal oleh penerima.

### 4. Implementasi Fitur "Resend Invoice"
Tersedia fitur baru untuk memicu pengiriman ulang *invoice* jika ditemukan indikasi kegagalan pengiriman di masa mendatang. 

* Sebagai langkah proaktif, fitur ini telah dijalankan untuk **5 perusahaan** dengan status "Menunggu Pembayaran".
* Verifikasi telah dilakukan dan seluruh lampiran pada email tersebut kini dapat diakses dengan sempurna.

<div className="card shadow--lw" style={{ marginBottom: '2rem', marginTop: '1.5rem', overflow: 'hidden', border: '1px solid var(--ifm-color-emphasis-200)' }}>
  <div className="card__image">
    <img 
      src="/img/pembaruan/2026-04-21-annual-fee/action-button-resend.png" 
      alt="Tombol Action Kirim Ulang Invoice" 
      style={{ 
        width: '100%', 
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        objectFit: 'contain'
      }} 
    />
  </div>
  <div className="card__body" style={{ padding: '1rem', backgroundColor: 'var(--ifm-contents-background-color)' }}>
    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ifm-color-content-secondary)' }}>
      <strong>Visualisasi Sistem:</strong> Antarmuka tombol <em>Resend Invoice</em> pada kolom aksi admin untuk pengelolaan dokumen mandiri.
    </p>
  </div>
</div>

---

:::info Konfirmasi Penyelesaian
Seluruh proses sinkronisasi dan perbaikan dokumen bagi pihak terdampak telah diselesaikan secara otomatis oleh sistem. Saat ini tidak diperlukan tindakan manual tambahan dari sisi pengguna.
:::