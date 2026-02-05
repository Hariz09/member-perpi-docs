# 2. Sertifikat Keanggotaan

:::info Sertifikat Digital
Panduan ini akan membantu Anda melihat dan mengunduh sertifikat keanggotaan PERPI.
:::

## Gambaran Umum

Setiap tahun setelah pembayaran iuran dikonfirmasi, PERPI akan menerbitkan sertifikat keanggotaan digital untuk perusahaan Anda.

**Format**: PDF Digital  

## Apa itu Sertifikat Keanggotaan?

### Fungsi Sertifikat

Sertifikat keanggotaan adalah dokumen resmi yang:
- ✅ Membuktikan status keanggotaan PERPI
- ✅ Menunjukkan periode keanggotaan
- ✅ Dapat digunakan untuk proposal/tender
- ✅ Meningkatkan kredibilitas perusahaan
- ✅ Bukti komitmen terhadap standar profesional

### Informasi dalam Sertifikat

Sertifikat berisi:
- **Nama Perusahaan**: Nama lengkap perusahaan
- **Nomor Sertifikat**: Nomor unik sertifikat
- **Periode Keanggotaan**: Tanggal mulai - tanggal berakhir
- **Tahun**: Tahun keanggotaan
- **Tanggal Terbit**: Tanggal sertifikat diterbitkan
- **Tanda Tangan**: Tanda tangan pejabat PERPI
- **Logo PERPI**: Logo resmi PERPI
- **QR Code**: Untuk verifikasi online

## Langkah 1: Akses Sertifikat

### Metode 1: Dari Halaman Pembayaran

1. **Login ke Dashboard**
   - URL: https://member.perpi.or.id

2. **Klik Menu "Pembayaran"**
   - Di sidebar atau top navigation
   - URL: `/member/[companyId]/payment`

3. **Cari Iuran yang Sudah Dibayar**
   - Status: "Paid" atau "Lunas"
   - Badge hijau

4. **Klik "Download Sertifikat"**
   - Tombol ada di card iuran
   - Icon download atau text "Download Sertifikat"

:::tip Screenshot
📸 **Path Screenshot**: `/member/[companyId]/payment`
- Card iuran dengan status "Paid"
- Tombol "Download Sertifikat"
- Icon sertifikat
:::

### Metode 2: Dari Halaman Fasilitas

1. **Login ke Dashboard**

2. **Klik Menu "Fasilitas" atau "Facilities"**
   - Di sidebar atau top navigation
   - URL: `/member/[companyId]/facilities`

3. **Cari Card "Sertifikat Keanggotaan"**
   - Icon award/sertifikat
   - Deskripsi: "Unduh sertifikat keanggotaan resmi PERPI"

4. **Klik Card atau Tombol "Download"**
   - Akan download sertifikat terbaru
   - Atau tampilkan daftar sertifikat

:::tip Screenshot
📸 **Path Screenshot**: `/member/[companyId]/facilities`
- Grid fasilitas member
- Card "Sertifikat Keanggotaan"
- Status available/not available
:::

## Langkah 2: Download Sertifikat

### Proses Download

1. **Klik Tombol Download**
   - Dari halaman pembayaran, fasilitas, atau email

2. **File PDF Akan Terdownload**
   - Nama file: `certificate_[tahun]_[timestamp].pdf`
   - Lokasi: Folder download browser Anda

3. **Buka File PDF**
   - Gunakan PDF reader (Adobe Reader, browser, dll)
   - Cek isi sertifikat

### Jika Download Gagal

**Penyebab**:
- Koneksi internet bermasalah
- Browser block download
- File terlalu besar

**Solusi**:
- Cek koneksi internet
- Allow download di browser
- Coba browser lain
- Klik kanan → Save As

## Langkah 3: Verifikasi Sertifikat

### Cek Informasi Sertifikat

Pastikan informasi benar:
- ✅ Nama perusahaan sesuai
- ✅ Periode keanggotaan benar
- ✅ Tahun sesuai
- ✅ Nomor sertifikat ada
- ✅ Tanda tangan dan logo PERPI ada
- ✅ QR code ada

### Verifikasi Online (Jika Ada QR Code)

1. **Scan QR Code**
   - Gunakan smartphone
   - Buka camera atau QR scanner app

2. **Akses Link Verifikasi**
   - QR code akan membuka link verifikasi
   - URL: `/api/certificates/verify/[token]`

3. **Halaman Verifikasi**
   - Menampilkan informasi sertifikat
   - Status: Valid atau Invalid
   - Detail perusahaan dan periode

:::info Verifikasi
Verifikasi online memastikan sertifikat adalah asli dan belum kadaluarsa.
:::

### Jika Ada Kesalahan

**Jika informasi salah**:
- Hubungi PERPI
- Sertakan screenshot sertifikat
- Jelaskan kesalahan yang ada

**PERPI akan**:
- Cek data di sistem
- Perbaiki jika ada kesalahan
- Terbitkan sertifikat baru

## Penggunaan Sertifikat

### Dimana Bisa Digunakan?

1. **Proposal dan Tender**
   - Lampirkan sebagai bukti keanggotaan
   - Menunjukkan kredibilitas perusahaan

2. **Marketing Material**
   - Brosur perusahaan
   - Company profile
   - Website

3. **Presentasi Klien**
   - Slide presentasi
   - Pitch deck
   - Capability statement

4. **Kantor**
   - Print dan pajang di kantor
   - Tunjukkan ke visitor

5. **Media Sosial**
   - Share di LinkedIn
   - Post di Instagram/Facebook
   - Tunjukkan achievement

## Troubleshooting

### Masalah Umum

#### 1. Sertifikat Belum Tersedia

**Penyebab**:
- Pembayaran baru dikonfirmasi
- Sertifikat sedang diproses
- Belum 1-3 hari sejak pembayaran

**Solusi**:
- Tunggu 1-3 hari kerja
- Cek kembali di halaman pembayaran
- Jika lebih dari 7 hari, hubungi PERPI

#### 2. Tombol Download Tidak Muncul

**Penyebab**:
- Pembayaran belum dikonfirmasi
- Sertifikat belum dibuat
- Status bukan "Paid"

**Solusi**:
- Cek status pembayaran
- Pastikan status "Paid"
- Refresh halaman
- Hubungi PERPI jika sudah paid tapi tidak ada tombol

#### 3. Download Gagal atau File Corrupt

**Penyebab**:
- Koneksi internet terputus
- File corrupt di server
- Browser issue

**Solusi**:
- Download ulang
- Coba browser lain
- Clear browser cache
- Hubungi PERPI jika tetap gagal

#### 4. Informasi Sertifikat Salah

**Penyebab**:
- Data perusahaan salah di sistem
- Error saat generate sertifikat

**Solusi**:
- Hubungi PERPI segera
- Sertakan screenshot sertifikat
- PERPI akan terbitkan sertifikat baru

#### 5. QR Code Tidak Berfungsi

**Penyebab**:
- QR code rusak
- Link verifikasi bermasalah

**Solusi**:
- Coba scan ulang
- Gunakan QR scanner app lain
- Hubungi PERPI jika tetap tidak bisa

## Keamanan Sertifikat

### Jangan Dipalsukan

- ❌ Jangan edit atau manipulasi sertifikat
- ❌ Jangan ubah informasi
- ❌ Jangan gunakan sertifikat perusahaan lain

**Konsekuensi**:
- Pelanggaran kode etik
- Pencabutan keanggotaan
- Tindakan hukum

### Gunakan Sesuai Ketentuan

- ✅ Gunakan sertifikat asli
- ✅ Gunakan untuk periode yang berlaku
- ✅ Jangan claim keanggotaan jika sudah expired

## Checklist Penyelesaian

- [ ] Login ke dashboard
- [ ] Akses halaman pembayaran atau fasilitas
- [ ] Cari iuran dengan status "Paid"
- [ ] Klik tombol "Download Sertifikat"
- [ ] File PDF terdownload
- [ ] Buka dan cek isi sertifikat
- [ ] Verifikasi informasi benar
- [ ] Simpan file dengan baik
- [ ] Backup di cloud
- [ ] Print jika diperlukan
- [ ] Gunakan untuk marketing/proposal