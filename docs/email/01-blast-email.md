---
id: blast-email
title: Panduan Email Blast — Member Representation
sidebar_label: Email Blast
sidebar_position: 1
description: Panduan lengkap alur kerja Email Blast — membuat draft, mengirim email test, mengirim blast, cara kerja pengiriman, dan cara memeriksa riwayat/log blast.
keywords:
  - email blast
  - blast email
  - draft email
  - kirim email massal
  - perpi
  - notifications@perpi.id
---

# Panduan Email Blast

**Email Blast** adalah fitur untuk mengirim email massal secara manual (mis. pengumuman, undangan, informasi acara) ke penerima yang dipilih berdasarkan **peran (role)** atau **peserta event**. Seluruh Email Blast dikirim dari alamat resmi **`notifications@perpi.id`** dengan nama tampilan **PERPI**.

:::info Sebelum memulai
Fitur ini dapat diakses oleh peran **Finance** dan **Leader** dengan hak akses yang **setara** — lihat tabel di bawah sebelum memulai.
:::

---

## Alur Kerja & Hak Akses

Email Blast dapat digunakan secara mandiri oleh peran **Finance** maupun **Leader**. Kedua peran memiliki hak akses yang sama untuk seluruh alur kerja, mulai dari membuat draft hingga mengirim blast.

| Aksi | Finance | Leader |
| :--- | :---: | :---: |
| Membuat & menyimpan draft | ✅ | ✅ |
| Melanjutkan edit / menghapus draft | ✅ | ✅ |
| Melihat Riwayat Blast (draft & terkirim) | ✅ | ✅ |
| Melampirkan file | ✅ | ✅ |
| **Mengirim email test** | ✅ | ✅ |
| **Mengirim email blast** | ✅ | ✅ |

---

## Langkah 1 — Membuka menu Blast Email

Pada **sidebar**, buka bagian **Email**, lalu pilih submenu **Blast Email**.

`Sidebar → Email → Blast Email` — tersedia untuk peran **Finance** maupun **Leader**.

<img src="/img/email/01-blast-email/1-sidebar-blast-email.png" alt="Menu Blast Email pada sidebar" className="img-large" />

---

## Langkah 2 — Membuat Draft

Halaman Blast Email menampilkan composer bergaya email client.

<img src="/img/email/01-blast-email/2.1-composer-overview.png" alt="Tampilan composer Email Blast" className="img-large" />

**1. Dari (From)** — bersifat baku/read-only, selalu menampilkan **`PERPI <notifications@perpi.id>`**.

**2. Kepada / Cc / Bcc** — pilih penerima dengan salah satu dari dua cara:

- **Ketik manual**: ketik alamat email (atau `Nama <email@domain.com>`), lalu tekan Enter/koma untuk menjadikannya chip.
- **Tombol "Tambah"**: membuka dialog pemilihan penerima dengan dua tab:
  - **Berdasarkan Role** — pilih dari grup **Leader**, **Committee**, **Finance**, atau **PIC Member Aktif** (kontak PIC dari seluruh perusahaan member aktif).
  - **Berdasarkan Event** — cari nama event, lalu pilih untuk memuat seluruh **peserta aktif** event tersebut.

<img src="/img/email/01-blast-email/2.2-recipient-picker.gif" alt="Dialog Tambah Penerima — Berdasarkan Role & Berdasarkan Event" className="img-large" />

Setiap chip penerima diberi warna sesuai sumbernya (Leader, Committee, Finance, PIC Member Aktif, Peserta Event, atau Input Manual) agar mudah dikenali — lihat ikon bantuan **(?)** pada composer untuk keterangan lengkap warna.

:::warning Satu penerima, satu kolom
Alamat email yang sama hanya boleh berada di **satu** kolom (Kepada **atau** Cc **atau** Bcc). Jika terjadi duplikasi, banner peringatan akan muncul dengan tombol **"Rapikan Otomatis"** yang otomatis merapikan duplikasi (prioritas: Kepada > Cc > Bcc).
:::

**3. Subjek** — maksimal 200 karakter, disertai penghitung karakter.

**4. Isi Email** — editor teks kaya (rich text), mendukung format tebal, miring, warna teks, dan tautan.

**5. Lampiran** — klik **"Lampirkan"** untuk menambah file, maksimal **5 file** dengan total ukuran **3 MB**.

<img src="/img/email/01-blast-email/2.3-composer-filled.png" alt="Composer terisi lengkap sebelum disimpan" className="img-large" />

**6.** Setelah semua terisi, klik **"Simpan Draft"**.

Draft yang tersimpan akan muncul di tabel **Riwayat Blast** dengan status **"Draft"**, dan dapat dilanjutkan atau langsung dikirim oleh Finance maupun Leader.


:::tip Melanjutkan draft yang sudah ada
Draft yang tersimpan dapat dibuka kembali dari halaman **Riwayat Blast** dengan klik **"Lanjutkan Edit"** — lihat [Langkah 5](#langkah-5--memeriksa-draft--riwayat-blast).
:::

---

## Langkah 3 — Mengirim & Memeriksa Email Test

Sebelum email blast dapat dikirim, **wajib** mengirim email test terlebih dahulu menggunakan isi yang sama persis dengan draft saat ini.

**1.** Klik tombol **"Kirim Test"** pada composer.

**2.** Pada dialog **"Kirim Email Test"**, kolom **"Alamat email test"** sudah terisi otomatis dengan email akun yang sedang login — dapat diubah ke alamat lain bila perlu.

**3.** Klik **"Kirim"** pada dialog. Email test akan terkirim dengan subjek diberi awalan **`[TEST]`**, ke satu alamat tersebut saja.

<img src="/img/email/01-blast-email/3.1-kirim-test-button.gif" alt="Tombol Kirim Test" className="img-large" />

**4.** Periksa inbox alamat email test untuk memastikan tampilan subjek, isi, dan lampiran sudah benar.

:::info Status "Test terkirim"
Setelah test berhasil, badge composer berubah menjadi **"Test terkirim"** dan tombol **"Kirim"** menjadi aktif. Jika subjek, isi, atau lampiran diubah setelahnya, status akan kembali menjadi **"Belum ditest"** dan Anda harus mengirim ulang email test dengan isi yang baru sebelum dapat mengirim blast. (Mengubah daftar penerima tidak memengaruhi status test.)
:::

---

## Langkah 4 — Mengirim Email Blast

Setelah status **"Test terkirim"** aktif, tombol **"Kirim"** dapat digunakan.

**1.** Klik tombol **"Kirim"**.

<img src="/img/email/01-blast-email/4.1-kirim-button.png" alt="Tombol Kirim setelah test berhasil" className="img-large" />

**2.** Pada dialog **"Konfirmasi Pengiriman"**, periksa kembali ringkasan subjek, jumlah lampiran, serta jumlah penerima Kepada/Cc/Bcc.

<img src="/img/email/01-blast-email/4.2-konfirmasi-pengiriman.png" alt="Dialog Konfirmasi Pengiriman" className="img-large" />

**3.** Centang kotak pernyataan tanggung jawab: *"Saya bertanggung jawab atas pengiriman email ini kepada \{jumlah\} penerima atas nama PERPI."*, lalu klik **"Kirim Sekarang"**.

:::danger Periksa kembali sebelum mengirim
Email blast **tidak dapat dibatalkan** setelah diklik "Kirim Sekarang". Pastikan subjek, isi, lampiran, dan daftar penerima sudah benar sebelum melanjutkan.
:::

**4.** Proses pengiriman berjalan dengan indikator progres **"Mengirim \{terkirim\}/\{total\}"**.

**5.** Setelah selesai, dialog **"Hasil Pengiriman"** menampilkan jumlah **Terkirim**, **Gagal**, dan **Terfilter**. Jika ada yang gagal, tersedia tombol **"Coba Ulang yang Gagal"** untuk mengirim ulang khusus ke alamat yang gagal.

<img src="/img/email/01-blast-email/4.3-hasil-pengiriman.png" alt="Dialog Hasil Pengiriman" className="img-large" />

:::tip Selesai 🎉
Setelah semua penerima berhasil dikirimi, composer otomatis kembali kosong dan blast tercatat pada **Riwayat Blast** dengan status **"Terkirim"**.
:::

---

## Cara Kerja Pengiriman Email Blast

Penting untuk dipahami sebelum mengirim blast ke banyak penerima:

:::info Setiap penerima "Kepada" menerima email tersendiri
Meskipun disebut "blast", sistem **tidak** mengirim satu email dengan banyak alamat sekaligus di kolom Kepada. Setiap alamat pada kolom **Kepada** menerima **email individual terpisah**, sehingga sesama penerima **tidak saling melihat** alamat email satu sama lain.

Alamat pada **Cc** dan **Bcc** disertakan secara utuh pada **setiap** email individual tersebut. Artinya, jika ada 10 penerima Kepada, maka setiap alamat Cc/Bcc akan menerima **10 salinan email** (satu untuk setiap penerima Kepada) — sama seperti mengirim 10 email terpisah secara manual dan mencantumkan Cc/Bcc yang sama di setiap email.
:::

Untuk menjaga performa dan menghindari waktu tunggu berlebih pada daftar penerima besar, sistem membagi pengiriman menjadi beberapa batch kecil yang diproses berurutan, dengan beberapa email dikirim bersamaan dalam satu batch. Karena itu, progres pengiriman ditampilkan bertahap, bukan langsung selesai dalam satu kali proses. Kapasitas maksimum satu blast: **1000 penerima Kepada**, **100 Cc**, **100 Bcc**.

---

## Langkah 5 — Memeriksa Draft & Riwayat Blast

Untuk melihat seluruh draft tersimpan maupun blast yang sudah terkirim, buka **Sidebar → Email → Riwayat Blast**.

<img src="/img/email/01-blast-email/5.1-sidebar-riwayat-blast.png" alt="Menu Riwayat Blast pada sidebar" className="img-large" />

Halaman **"Draft & Riwayat Blast"** menampilkan tabel dengan kolom:

- **Kepada / Cc / Bcc** — daftar penerima (chip, arahkan kursor untuk melihat semua).
- **Subjek** — dapat diurutkan; menampilkan *"(Tanpa subjek)"* jika kosong.
- **Isi Email** — cuplikan singkat isi email.
- **Status** — badge **Draft** atau **Terkirim**.
- **Disimpan/Dikirim Oleh** — nama akun yang menyimpan draft atau mengirim blast.
- **Waktu** — waktu terakhir disimpan atau dikirim.

<img src="/img/email/01-blast-email/5.2-tabel-riwayat-blast.png" alt="Tabel Draft & Riwayat Blast" className="img-large" />

Gunakan filter status (**Draft** / **Terkirim**) atau kolom pencarian subjek untuk mempersempit tampilan. Tabel juga dapat diekspor ke spreadsheet melalui tombol **"Export"**.

**Tindakan yang tersedia** (klik ikon **⋯** pada baris):

| Status baris | Tindakan tersedia |
| :--- | :--- |
| **Draft** | **Lanjutkan Edit** (membuka kembali di composer) atau **Hapus Draft** |
| **Terkirim** | **Lihat Detail** (menampilkan subjek, seluruh penerima, dan isi email lengkap yang telah dikirim) |

<img src="/img/email/01-blast-email/5.3-lanjutkan-edit-draft.gif" alt="Lanjutkan Edit Draft Email Blast" className="img-large" />

<img src="/img/email/01-blast-email/5.4-detail-blast-terkirim.gif" alt="Dialog Detail Email Blast Terkirim" className="img-large" />
:::

---

## Butuh bantuan?

Masih mengalami kendala saat menggunakan Email Blast? Silakan hubungi kami di **[sekretariat@perpi.id](mailto:sekretariat@perpi.id)**.
