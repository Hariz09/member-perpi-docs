---
id: new-member-company-profile
title: Pengisian Profil Perusahaan
sidebar_label: 2. Pengisian Profil Perusahaan
sidebar_position: 2
---

:::warning Pastikan Anda Telah Membuat Akun
Sebelum melengkapi profil perusahaan, pastikan Anda sudah membuat akun dan login ke sistem. Jika belum, silakan baca terlebih dahulu: **[📖 Panduan Autentikasi](../tutorial-autentikasi-perpi.md)**
:::

## Gambaran Umum

Profil perusahaan adalah informasi lengkap tentang perusahaan Anda yang akan direview oleh tim PERPI. Informasi ini mencakup:

- Data perusahaan (nama, alamat, kontak)
- Informasi PIC (Person in Charge)
- Detail operasional (tahun berdiri, jumlah karyawan, dll)
- Informasi keuangan (revenue range)

**Status Aplikasi**: `Mengisi Profil` → `Mengisi Dokumen`

### Cara Mengakses

Setelah login pertama kali, Anda akan otomatis diarahkan ke halaman aplikasi:

1. **URL**: `/applications/[companyId]`
2. **Navigasi**: Dashboard → Tab "Informasi Perusahaan"

<img src="/img/new-member/company-profile/landing.png" alt="Landing Page" className="img-large" />


### Tampilan Awal

Anda akan melihat:
1. Header aplikasi yang berisi data perusahaan di bagian kiri, dan informasi aplikasi di sebelah kanan
2. Tab yang menunjakan langkah-langkah dan progress aplikasi.

Jika anda scroll kebawah anda akan melihat form data perusahaan


## Langkah 2: Isi Data PIC (Person in Charge)

<img src="/img/new-member/company-profile/form_1_pic.png" alt="Form PIC" className="img-large"/>

PIC adalah orang yang bertanggung jawab dan menjadi contact person utama.

#### 1. Nama Lengkap PIC
- **Validasi**: 
  - Minimal 2 karakter
  - Maksimal 255 karakter
- **Contoh**: "Budi Santoso"

:::warning Penting
Nama PIC akan digunakan dalam semua komunikasi resmi. Pastikan menggunakan nama lengkap yang sesuai dengan identitas.
:::

#### 2. Nomor Telepon PIC
- **Format**: 
  - `08xxxxxxxxxx` (format Indonesia)
  - `+628xxxxxxxxxx` (format internasional)
  - `628xxxxxxxxxx` (tanpa +)
- **Validasi**: Harus nomor yang valid dan aktif
- **Contoh**: "081234567890"

:::tip Tips
- Gunakan nomor yang aktif dan sering digunakan
- Pastikan nomor bisa dihubungi via WhatsApp
- Nomor ini akan digunakan untuk koordinasi kunjungan dan interview
:::

#### 3. Jenis Perusahaan
- **Format**: Single select dropdown
- **Opsi**: Lokal atau Multinational
- **Contoh**: "Lokal"

#### Bio dan Deskripsi Perusahaan (Opsional)
- **Format**: Teks panjang

## Langkah 3: Isi Data Perusahaan
<img src="/img/new-member/company-profile/form_2_company_info.png" alt="Form Perusahaan" className="img-large"/>

#### 1. Nama Perusahaan
- **Format**: Nama resmi perusahaan
- **Validasi**: 
  - Minimal 2 karakter
  - Maksimal 255 karakter
- **Contoh**: "PT Riset Pasar Indonesia"

:::info Catatan
Gunakan nama resmi sesuai akta pendirian. Nama ini akan muncul di sertifikat keanggotaan.
:::

#### 2. Website Perusahaan
- **Format**: URL lengkap
- **Validasi**: Harus diawali dengan "https://"
- **Contoh**: "https://www.example.com"

:::info Catatan
Website akan ditampilkan di profil perusahaan. Pastikan:
- URL aktif
- Website profesional
- Informasi perusahaan lengkap
:::

## Langkah 4: Isi Alamat Kantor
<img src="/img/new-member/company-profile/form_3_address.png" alt="Form Alamat" className="img-large"/>

:::warning Penting
Alamat ini akan diverifikasi melalui kunjungan kantor. Pastikan:
- Alamat lengkap dan akurat
- Mudah ditemukan
- Sesuai dengan surat domisili
- Kantor benar-benar operasional di alamat tersebut
:::

:::tip Tips
Anda dapat menggunakan search bar ***Cari Lokasi Perusahaan*** untuk autofill alamat.
:::

#### 1. Alamat Jalan
- **Validasi**: Minimal 10 karakter
- **Contoh**: 
  ```
  Jl. Sudirman No. 123, Lantai 5
  Gedung Perkantoran ABC
  ```

#### 3. Kota
- **Format**: Nama kota
- **Validasi**: Minimal 2 karakter
- **Contoh**: "Jakarta Pusat"

#### 4. Provinsi
- **Format**: Nama provinsi 
- **Validasi**: Minimal 2 karakter
- **Contoh**: "DKI Jakarta"

#### 5. Kode Pos
- **Format**: 5 digit angka
- **Validasi**: Harus 5 digit
- **Contoh**: "10250"



## Langkah 5: Isi Data Operasional

Informasi lengkap tentang layanan, sumber daya manusia, dan keuangan perusahaan

---

### A. Section: Layanan dan Teknologi
<img src="/img/new-member/company-profile/form_4_operational_info.png" alt="Form Layanan dan Teknologi" className="img-large"/>

##### 1. Industri yang Didukung
- **Format**: Single select dropdown
- **Opsi**:
  - Pertanian
  - Pakaian & Mode
  - Otomotif
  - Minuman (Alkohol / Non-Alkohol)
  - Konstruksi
  - E-Commerce
  - Pendidikan
  - Hiburan
  - Fast-Moving Consumer Goods (FMCG)
  - Keuangan
  - Pemerintah
  - Kesehatan
  - Peralatan Rumah Tangga
  - Media
  - Perawatan Pribadi & Kecantikan
  - Sektor publik / Lembaga Non Profit (NGO)
  - Agensi riset
  - Ritel (Offline & Online)
  - Teknologi
  - Telekomunikasi
  - Perjalanan
  - Lainnya

:::tip Tips Memilih Industri
Pilih industri utama yang menjadi fokus atau spesialisasi perusahaan riset Anda. Ini membantu PERPI memahami expertise area Anda.
:::

---

### B. Section: Sumber Daya Manusia

<img src="/img/new-member/company-profile/form_5_human_resources.png" alt="Form Sumber Daya Manusia" className="img-large"/>

##### 1. Jenis Karyawan
- **Format**: Multi select (checkbox)
- **Opsi**:
  - Full-time
  - Part-time
  - Freelancer
- **Deskripsi**: Pilih jenis karyawan yang ada di perusahaan

:::info Catatan
Anda dapat memilih lebih dari satu jenis karyawan sesuai dengan komposisi tim perusahaan.
:::

##### 2. Jenis Tim Operasional
- **Format**: Multi select (checkbox)
- **Opsi**:
  - Full-time
  - Part-time
  - Freelancer
  - Outsource
- **Deskripsi**: Pilih jenis tim operasional yang ada di perusahaan

:::info Definisi Tim Pendukung
Tim pendukung mencakup staf administrasi, IT, keuangan, HR, dan fungsi support lainnya yang tidak terlibat langsung dalam riset.
:::

---

### C. Section: Informasi Pendapatan

<img src="/img/new-member/company-profile/form_6_revenue.png" alt="Form Informasi Pendapatan" className="img-large"/>

##### 1. Rentang Pendapatan Tahunan
- **Format**: Single select dropdown
- **Opsi**:
  - < 10 Miliar Rupiah
  - 10–30 Miliar Rupiah
  - 31–50 Miliar Rupiah
  - \> 50 Miliar Rupiah
- **Deskripsi**: Pilih rentang pendapatan tahunan perusahaan

:::info Kerahasiaan
Informasi ini bersifat rahasia dan hanya digunakan untuk keperluan internal PERPI serta analisis industri riset pasar.
:::

##### 2. Persentase Pendapatan Kualitatif
- **Format**: Angka (%)
- **Validasi**: 0-100
- **Contoh**: "60"
- **Deskripsi**: Persentase pendapatan dari riset kualitatif (FGD, IDI, etnografi, dll)

##### 3. Persentase Pendapatan Non-Kualitatif
- **Format**: Angka (%)
- **Validasi**: 0-100
- **Contoh**: "40"
- **Deskripsi**: Persentase pendapatan dari riset non-kualitatif (survey kuantitatif, analisis data, dll)

:::warning Validasi
Total persentase dari riset kualitatif dan non-kualitatif harus sama dengan 100%.
:::

:::tip Tips Mengisi Komposisi Pendapatan
- Hitung berdasarkan revenue tahun terakhir
- Bulatkan ke angka terdekat
- Jika ragu, gunakan estimasi terbaik Anda
- Pastikan kedua persentase totalnya = 100%
:::

### D. Section: Informasi Legal & Keuangan

<img src="/img/new-member/company-profile/form_7_informasi_legal_keuangan.png" alt="Form Informasi Legal & Keuangan" className="img-large"/>

##### 1. Nama Legal Perusahaan
- **Format**: Nama resmi perusahaan
- **Validasi**: 
  - Minimal 2 karakter
  - Maksimal 255 karakter
- **Contoh**: "PT Riset Pasar Indonesia"
- **Deskripsi**: Nama perusahaan sesuai akta pendirian

##### 2. Penerima Invoice (Attention) 
- **Format**: Nama penerima invoice
- **Validasi**: 
  - Minimal 2 karakter
  - Maksimal 255 karakter
- **Contoh**: "Budi Santoso"
- **Deskripsi**: Nama penerima invoice yang ditujukan untuk menerima invoice pembayaran

##### 3. Nama Finance
- **Format**: Nama finance
- **Validasi**: 
  - Minimal 2 karakter
  - Maksimal 255 karakter
- **Contoh**: "Budi Santoso"
- **Deskripsi**: Nama finance perusahaan yang bertanggung jawab terhadap keuangan perusahaan

##### 4. Email Finance
- **Format**: Email valid
- **Validasi**: Harus diisi dengan email aktif
- **Contoh**: "finance@perpi.or.id"
- **Deskripsi**: Email finance perusahaan untuk tujuan komunikasi keuangan (akan menerima email invoice dan sertifikat)

### E. Section: Logo (Opsional)
<img src="/img/new-member/company-profile/form_8_logo.png" alt="Form Logo" className="img-large"/>

##### 1. Logo Perusahaan
- **Format**: Gambar (JPG, PNG)
- **Validasi**: Maksimal 5MB
- **Deskripsi**: Upload logo perusahaan
- **Tips**: Gunakan logo resmi perusahaan


---

## Langkah 6: Validasi dan Simpan

### Validasi Form

Sebelum menyimpan, sistem akan memvalidasi:

1. **Field Wajib**: Semua field wajib harus diisi
2. **Format Data**: Email, telepon, dll harus sesuai format
3. **Panjang Karakter**: Sesuai batasan minimal/maksimal

### Simpan Data

1. **Klik Tombol "Lanjut ke Dokumen"**
   - Tombol ada di bagian bawah form
   - Modal konfirmasi akan muncul

<img src="/img/new-member/company-profile/form_submit.png" alt="Form Submit" className="img-large"/>
<img src="/img/new-member/company-profile/form_submit_confirmation_modal.png" alt="Form Submit Confirmation Modal" className="img-large"/>


2. **Konfirmasi Sukses**
   - Toast notification "Profil berhasil disimpan"
   - Status berubah dari Mengisi Profil ke Mengisi Dokumen
   - Navigation card "Informasi Perusahaan" berubah jadi "Selesai" (hijau)
   - Navigation card "Dokumen" berubah jadi "Berlangsung" (biru)

Contoh field yang error:
<img src="/img/new-member/company-profile/form_invalid.png" alt="Invalid Form" className="img-large"/>

## Tips Sukses

1. **Akurasi Data**
   - Pastikan semua data akurat dan sesuai dokumen resmi
   - Hindari typo atau kesalahan ketik
   - Gunakan data yang konsisten

2. **Kelengkapan Informasi**
   - Isi semua field dengan lengkap
   - Jangan skip field opsional jika memungkinkan
   - Berikan deskripsi yang informatif

3. **Profesionalisme**
   - Gunakan bahasa formal dan profesional
   - Hindari singkatan yang tidak umum
   - Tulis dengan jelas dan mudah dipahami

4. **Verifikasi**
   - Cek ulang semua data sebelum simpan
   - Pastikan nomor telepon bisa dihubungi
   - Pastikan email aktif

Di langkah selanjutnya, Anda akan:
- Menyiapkan dokumen-dokumen yang diperlukan
- Upload dokumen ke sistem
- Memastikan semua dokumen wajib terpenuhi