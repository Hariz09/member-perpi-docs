---
id: notifikasi-email
title: Panduan Notifikasi Sistem — Member Representation
sidebar_label: Notifikasi Sistem
sidebar_position: 2
description: Penjelasan singkat cara kerja email notifikasi otomatis PERPI dan cara memeriksa log/riwayat pengirimannya.
keywords:
  - notifikasi email
  - email otomatis
  - riwayat notifikasi
  - perpi
  - notifications@perpi.id
---

# Panduan Notifikasi Sistem

**Notifikasi Sistem** adalah email yang dikirim **otomatis** oleh Sistem Manajemen PERPI setiap kali terjadi suatu aksi atau perubahan status pada aplikasi — tanpa perlu ditulis atau dikirim secara manual oleh siapa pun. Seluruh notifikasi dikirim dari alamat resmi **`notifications@perpi.id`** dengan nama tampilan **PERPI**.

:::info Cakupan panduan ini
Panduan ini **tidak** membahas satu per satu jenis notifikasi yang ada (jumlahnya cukup banyak dan terus bertambah). Fokus panduan ini adalah **apa yang dilakukan sistem secara umum** dan **cara memeriksa log/riwayat pengirimannya**.
:::

---

## Apa yang Memicu Notifikasi Otomatis?

Secara umum, notifikasi dikirim otomatis pada kategori berikut:

- **Aplikasi Keanggotaan** — mis. saat pengajuan dikirim, perlu revisi, atau ditolak.
- **Wawancara & Kunjungan Kantor** — mis. penugasan pewawancara, undangan wawancara ke PIC.
- **Rapat Pleno** — mis. jadwal rapat, hasil keputusan, dokumen pendukung tersedia.
- **Keuangan & Iuran** — mis. invoice diterbitkan, bukti pembayaran diunggah, pembayaran dikonfirmasi, sertifikat diperbarui.
- **Event** — mis. tiket dikonfirmasi, invoice acara, undangan delegasi.
- **Autentikasi Akun** — reset kata sandi (dikirim dari `noreply@perpi.id`, terpisah dari sistem di atas).
- **Pengingat Terjadwal (Cron)** — dijalankan otomatis oleh sistem secara harian/mingguan, mis. pengingat sertifikat akan kedaluwarsa, member nonaktif, atau tagihan iuran/invoice yang belum dibayar.

Setiap email notifikasi menggunakan template baku sesuai jenisnya, dan selalu mencantumkan **`sekretariat@perpi.id`** sebagai kontak bantuan di bagian footer.

:::tip Ingin melihat isi pengingat sebelum terkirim?
Halaman **"Jadwal Notifikasi"** (`Sidebar → Email → Jadwal Notifikasi`, tersedia untuk Leader & Finance) menampilkan **pratinjau** siapa saja yang akan menerima pengingat terjadwal (cron) berikutnya, tanpa benar-benar mengirim email.
:::

---

## Cara Memeriksa Log Notifikasi

Tersedia **dua** halaman log yang berbeda tujuannya — pastikan menggunakan halaman yang sesuai kebutuhan.

### Riwayat Notifikasi (Email Logs)

**Sidebar → Email → Riwayat Notifikasi** — dapat diakses oleh **Leader** dan **Finance**.

Halaman ini adalah **catatan internal aplikasi** — mencatat setiap email yang *dicoba dikirim* oleh sistem (baik notifikasi otomatis maupun Email Blast), lengkap dengan status berhasil/gagalnya.

<img src="/img/email/02-notifikasi-email/2-tabel-riwayat-notifikasi.png" alt="Tabel Riwayat Notifikasi" className="img-large" />

Kolom yang ditampilkan:

- **Waktu Pengiriman**
- **Dikirim Kepada** — nama & email penerima, termasuk Cc/Bcc bila ada.
- **Kategori Email** — jenis notifikasi (mis. "Pengajuan Aplikasi", "Pembayaran Dikonfirmasi", "Pengiriman Email (Blast)").
- **Keterangan Sistem** — badge **Terkirim** atau **Gagal** (arahkan kursor pada badge **Gagal** untuk melihat pesan error).

Gunakan filter **Status** (Semua/Berhasil/Gagal) dan **Kategori Email**, atau kolom pencarian berdasarkan email/nama penerima, untuk mempersempit hasil. Statistik ringkas (Total, Berhasil, Gagal) ditampilkan di bagian atas, dan tabel dapat diekspor ke spreadsheet.

**Gunakan halaman ini untuk menjawab:** *"Apakah sistem sudah mengirim email X ke member Y, dan apakah berhasil?"*

---

## Butuh bantuan?

Jika menemukan email notifikasi yang tidak sesuai atau tidak terkirim, silakan hubungi kami di **[sekretariat@perpi.id](mailto:sekretariat@perpi.id)**.
