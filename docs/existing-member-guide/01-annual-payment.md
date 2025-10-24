# 1. Pembayaran Iuran Tahunan

:::info Iuran Tahunan
Panduan ini akan membantu Anda membayar iuran tahunan PERPI dan melacak status pembayaran.
:::

## Mengapa Perlu Bayar Iuran Tahunan?

### Manfaat Iuran

Iuran tahunan digunakan untuk:
- 🏢 Operasional organisasi PERPI
- 📚 Program pelatihan dan pengembangan anggota
- 🤝 Event networking dan seminar
- 📊 Riset dan publikasi industri
- 🎯 Advokasi dan representasi industri riset

### Konsekuensi Tidak Bayar

Jika tidak membayar iuran:
- ⚠️ Status berubah menjadi "Inactive Member"
- ⚠️ Tidak bisa akses fasilitas member
- ⚠️ Tidak bisa download sertifikat baru
- ⚠️ Tidak tercantum di direktori anggota aktif
- ⚠️ Tidak bisa ikut event eksklusif

## Langkah 1: Cek Status Iuran

### Akses Halaman Pembayaran

1. **Login ke Dashboard**
   - URL: https://member.perpi.or.id

2. **Klik Menu "Pembayaran" atau "Payment"**
   - Di sidebar atau top navigation
   - URL: `/member/[companyId]/payment`

3. **Halaman Pembayaran**
   - Daftar iuran tahunan
   - Status pembayaran
   - Riwayat pembayaran

:::tip Screenshot
📸 **Path Screenshot**: `/member/[companyId]/payment`
- Daftar iuran tahunan per tahun
- Status pembayaran (Unpaid, Paid, Waiting Invoice)
- Tombol upload bukti transfer
- Riwayat pembayaran
:::

### Status Pembayaran

| Status | Deskripsi | Aksi |
|--------|-----------|------|
| **Unpaid** | Belum dibayar | Upload bukti transfer |
| **Paid** | Sudah dibayar dan diverifikasi | Download sertifikat |
| **Waiting Invoice** | Menunggu invoice dari admin | Tunggu notifikasi |
| **Pending Verification** | Bukti transfer sedang diverifikasi | Tunggu verifikasi |

### Informasi yang Ditampilkan

Untuk setiap iuran tahunan:
- **Tahun**: Tahun iuran (misal: 2024)
- **Jumlah**: Rp 5.000.000
- **Status**: Status pembayaran
- **Tanggal Bayar**: Jika sudah dibayar
- **Bukti Transfer**: Link preview jika sudah upload
- **Sertifikat**: Link download jika tersedia

## Langkah 2: Informasi Pembayaran

### Rekening Tujuan

Untuk membayar iuran, transfer ke:

**Bank**: [Nama Bank, misal: Bank Mandiri]  
**No. Rekening**: [Nomor Rekening]  
**Atas Nama**: Perkumpulan Riset Pemasaran Indonesia (PERPI)  
**Jumlah**: Rp 5.000.000

:::warning Penting
- Transfer dengan jumlah **TEPAT**: Rp 5.000.000
- Jangan transfer dengan jumlah berbeda
- Cantumkan nama perusahaan di berita transfer (jika memungkinkan)
:::

### Cara Mendapatkan Informasi Rekening

Informasi rekening biasanya:
1. **Di Halaman Pembayaran**
   - Ditampilkan di bagian atas atau dalam card
   
2. **Di Email Reminder**
   - Dikirim saat mendekati jatuh tempo

3. **Hubungi PERPI**
   - Email: finance@perpi.or.id
   - Telepon: (021) xxxx-xxxx

## Langkah 3: Melakukan Pembayaran

### Bukti Transfer

Setelah transfer, Anda akan mendapat bukti transfer berupa:
- **Struk ATM**: Jika transfer via ATM
- **Screenshot**: Jika via internet/mobile banking
- **Slip Transfer**: Jika via teller

Pastikan bukti transfer menunjukkan:
- ✅ Tanggal dan waktu transfer
- ✅ Jumlah transfer (Rp 5.000.000)
- ✅ Rekening tujuan
- ✅ Nama penerima (PERPI)
- ✅ Status berhasil

## Langkah 4: Upload Bukti Transfer

### Persiapan File

1. **Scan atau Foto Bukti Transfer**
   - Jika struk fisik: Scan atau foto dengan jelas
   - Jika digital: Screenshot atau download PDF

2. **Format File**
   - Format: JPG, PNG, atau PDF
   - Ukuran: Maksimal 5MB
   - Kualitas: Jelas dan terbaca

3. **Pastikan Informasi Terlihat**
   - Semua detail transfer terlihat
   - Tidak blur atau terpotong
   - Tanggal dan jumlah jelas

### Cara Upload

1. **Di Halaman Pembayaran**
   - Cari card iuran yang ingin dibayar
   - Status harus "Unpaid"

2. **Klik "Upload Bukti Transfer"**
   - Tombol ada di card iuran
   - Dialog upload akan muncul

3. **Pilih File**
   - Klik "Choose File" atau "Browse"
   - Pilih file bukti transfer

4. **Pilih Tanggal Bayar**
   - Pilih tanggal saat Anda transfer
   - Gunakan date picker

5. **Preview**
   - Preview file akan muncul
   - Pastikan file benar

6. **Klik "Upload"**
   - Tunggu proses upload
   - Notifikasi sukses akan muncul

:::tip Screenshot
📸 **Path Screenshot**: Dialog upload bukti transfer
- File picker untuk pilih file
- Date picker untuk tanggal bayar
- Preview bukti transfer
- Tombol upload
:::

### Konfirmasi Upload

Setelah upload berhasil:

1. **Notifikasi Sukses**
   - "Bukti transfer berhasil diupload"
   - Toast notification

2. **Status Berubah**
   - Status: "Unpaid" → "Pending Verification"
   - Badge kuning "Menunggu Verifikasi"

3. **Bukti Transfer Terlihat**
   - Thumbnail atau link preview
   - Bisa diklik untuk lihat full size

4. **Email Konfirmasi**
   ```
   TODO
   ```

## Langkah 5: Konfirmasi Pembayaran

### Pembayaran Dikonfirmasi

Setelah pembayaran diverifikasi:

**Status**: "Pending Verification" → "Paid"

#### Email Konfirmasi

TODO

#### Update Dashboard

1. **Status Pembayaran**
   - Badge hijau "PAID" atau "Lunas"
   - Tanggal pembayaran terlihat

2. **Status Keanggotaan**
   - Status: "Active Member"
   - Periode keanggotaan diperpanjang

3. **Sertifikat**
   - Tombol "Download Sertifikat" akan muncul
   - Setelah sertifikat dibuat (1-3 hari)

## Perpanjangan Keanggotaan

### Reminder Pembayaran

Anda akan menerima reminder sebelum periode berakhir:

1. **4 Minggu Sebelum Expired**
   - Email reminder pertama
   - Informasi jatuh tempo

2. **3 Minggu Sebelum Expired**
   - Email reminder kedua
   - Urgent reminder

3. **2 Minggu Sebelum Expired**
   - Email reminder ketiga
   - Urgent reminder

4. **1 Minggu Sebelum Expired**
   - Email reminder terakhir
   - Very urgent reminder

### Proses Perpanjangan

1. **Cek Halaman Pembayaran**
   - Iuran tahun berikutnya akan muncul
   - Status: "Unpaid"

2. **Bayar Sebelum Jatuh Tempo**
   - Transfer ke rekening PERPI
   - Upload bukti transfer

3. **Periode Diperpanjang**
   - Setelah pembayaran dikonfirmasi
   - Periode keanggotaan +1 tahun

## Riwayat Pembayaran

### Melihat Riwayat

Di halaman pembayaran, Anda bisa lihat:

1. **Semua Iuran Tahunan**
   - Dari tahun pertama hingga sekarang
   - Diurutkan dari terbaru

2. **Detail Setiap Pembayaran**
   - Tahun
   - Jumlah
   - Status
   - Tanggal bayar
   - Bukti transfer
   - Sertifikat (jika ada)

3. **Filter dan Search**
   - Filter by status
   - Filter by year
   - Search

## Troubleshooting

### Masalah Umum

#### 1. Transfer Sudah Dilakukan tapi Belum Dikonfirmasi

**Jika sudah lebih dari 3 hari kerja**:
- Hubungi tim finance PERPI
- Email: finance@perpi.or.id
- Sertakan bukti transfer
- Berikan detail transfer

#### 2. Bukti Transfer Ditolak

**Penyebab**:
- Bukti tidak jelas
- Jumlah tidak sesuai
- Transfer belum masuk

**Solusi**:
- Upload bukti yang lebih jelas
- Cek status transfer di bank
- Hubungi tim finance untuk klarifikasi

#### 3. Tidak Bisa Upload Bukti Transfer

**Penyebab**:
- File terlalu besar (>5MB)
- Format tidak didukung
- Koneksi internet bermasalah

**Solusi**:
- Kompres file jika terlalu besar
- Gunakan format JPG, PNG, atau PDF
- Cek koneksi internet
- Coba browser lain

#### 4. Salah Upload Bukti Transfer

**Solusi**:
- Hubungi PERPI untuk hapus/ganti
- Atau upload ulang jika ada opsi

#### 5. Lupa Tanggal Transfer

**Solusi**:
- Cek riwayat transaksi di mobile banking
- Cek mutasi rekening
- Estimasi tanggal jika tidak ingat persis

## Tips Pembayaran

### 1. Bayar Tepat Waktu
- Set reminder sebelum jatuh tempo
- Jangan tunggu sampai last minute
- Bayar saat menerima reminder pertama

### 2. Simpan Bukti Transfer
- Simpan bukti transfer dengan baik
- Backup di cloud atau email
- Jangan hapus sebelum dikonfirmasi

### 3. Transfer dengan Benar
- Pastikan jumlah tepat (Rp 5.000.000)
- Cek nomor rekening dengan teliti
- Cantumkan nama perusahaan di berita

### 4. Upload Segera
- Upload bukti transfer segera setelah transfer
- Jangan tunda-tunda
- Semakin cepat upload, semakin cepat diverifikasi

### 5. Follow Up
- Cek status verifikasi secara berkala
- Hubungi PERPI jika lebih dari 3 hari belum dikonfirmasi

## Checklist Penyelesaian

- [ ] Login ke dashboard
- [ ] Akses halaman pembayaran
- [ ] Cek status iuran tahunan
- [ ] Catat informasi rekening tujuan
- [ ] Transfer Rp 5.000.000 ke rekening PERPI
- [ ] Simpan bukti transfer
- [ ] Upload bukti transfer ke dashboard
- [ ] Pilih tanggal bayar
- [ ] Menerima konfirmasi upload
- [ ] Menunggu verifikasi
- [ ] Menerima konfirmasi pembayaran
- [ ] Status berubah ke "Paid"
- [ ] Sertifikat tersedia untuk download

## Langkah Selanjutnya

Setelah pembayaran dikonfirmasi:

➡️ **[Download Sertifikat](./02-certificates.md)**
- Sertifikat akan tersedia 1-3 hari setelah pembayaran
- Download sertifikat digital (PDF)