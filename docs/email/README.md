---
id: email-guide-overview
title: Panduan Email PERPI
sidebar_label: Panduan Email PERPI
sidebar_position: 4
---

# Panduan Email PERPI

Panduan ini menjelaskan dua sistem pengiriman email pada Sistem Manajemen PERPI:

- **[Email Blast](./01-blast-email.md)** — pengiriman email massal secara **manual** (mis. pengumuman, undangan) yang dibuat dan dikirim oleh tim Finance/Leader.
- **[Notifikasi Sistem](./02-notifikasi-email.md)** — email transaksional yang dikirim **otomatis** oleh sistem (mis. status aplikasi, konfirmasi pembayaran, tiket event).

**Selamat membaca! 📧**

---

## Identitas Pengirim Resmi

Seluruh email dari Sistem Manajemen PERPI dikirim menggunakan salah satu dari dua alamat resmi berikut. Gunakan tabel ini sebagai referensi ketika menjelaskan ke member alamat mana yang sah/resmi digunakan oleh PERPI.

| Alamat Email                | Nama Tampilan (Display Name) | Digunakan Untuk                                                                                                    |
| :--------------------------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| **`notifications@perpi.id`** | **PERPI**                     | **Semua** email notifikasi otomatis sistem (aplikasi, event, iuran, sertifikat, dsb.) **dan** semua Email Blast manual yang dikirim oleh Leader. |
| `noreply@perpi.id`           | PERPI                         | Email autentikasi akun (OTP, verifikasi pendaftaran, pemulihan kata sandi) — dikirim melalui sistem autentikasi (Supabase Auth), terpisah dari sistem notifikasi/blast di atas. |

:::info Alamat Kontak/Bantuan — bukan alamat pengirim
**`sekretariat@perpi.id`** adalah alamat **kontak resmi PERPI**. Alamat ini **tidak** mengirim email secara teknis — melainkan dicantumkan sebagai tujuan balasan/bantuan pada:

- Bagian footer setiap email yang dikirim sistem (*"Untuk bantuan teknis atau pertanyaan, silakan hubungi: sekretariat@perpi.id"*).
- Halaman bantuan dan kontak pada dashboard member.

Jadi jika ada pertanyaan **"email dari PERPI itu sah tidak?"**, jawabannya: email sah datang dari **`notifications@perpi.id`** atau **`noreply@perpi.id`** dengan nama tampilan **PERPI**, dan selalu mencantumkan **`sekretariat@perpi.id`** sebagai kontak balasan di bagian footer.
:::

---

## Ringkasan Perbedaan

| | Email Blast | Notifikasi Sistem |
| :--- | :--- | :--- |
| **Pemicu** | Dibuat & dikirim manual oleh manusia | Otomatis oleh sistem saat suatu aksi/event terjadi |
| **Siapa yang membuat** | Finance (draft) & Leader (draft, kirim) | Sistem (tidak ada campur tangan manual) |
| **Isi email** | Bebas ditulis (subjek & isi kustom) | Template baku sesuai jenis notifikasi |
| **Lokasi menu** | Sidebar → **Email** → **Blast Email** | Tidak ada menu — berjalan otomatis di latar belakang |
| **Lokasi log** | Sidebar → **Email** → **Riwayat Blast** | Sidebar → **Email** → **Riwayat Notifikasi** (+ **Log SMTP** khusus Leader) |

<img src="/img/email/readme/1-sidebar-menu-email.png" alt="Menu Email pada sidebar Leader/Finance" className="img-large" />
