---
sidebar_position: 1
---

# Sistem Autentikasi PERPI

:::info Tentang Tutorial Ini
Tutorial ini menjelaskan cara menggunakan sistem autentikasi lengkap pada [aplikasi Member PERPI](http://member.perpi.id/), termasuk login, registrasi, reset password, manajemen pengguna, dan kontrol akses berdasarkan peran.
:::

## Daftar Isi

1. [Login (Masuk)](#login-masuk)
2. [Registrasi (Daftar Akun Baru)](#registrasi-daftar-akun-baru)
3. [Lupa Password](#lupa-password)
4. [Floating Button Manajemen Pengguna](#floating-button-manajemen-pengguna)
5. [Pembuatan Pengguna oleh Leader](#pembuatan-pengguna-oleh-leader)
6. [Sistem Peran dan Kontrol Akses](#sistem-peran-dan-kontrol-akses)

---

## Login (Masuk)

### Cara Mengakses Halaman Login

1. Buka [aplikasi Member PERPI](http://member.perpi.id/) di browser
2. Jika belum login, Anda akan diarahkan ke halaman login secara otomatis
3. Atau akses langsung melalui URL: https://member.perpi.id/auth/login

### Proses Login

1. **Masukkan Email**: Ketik alamat email yang terdaftar
2. **Masukkan Password**: Ketik kata sandi Anda
3. **Klik Tombol "Masuk"**: Sistem akan memverifikasi kredensial Anda

<img src={require('./img/auth/login.png').default} alt="Login Page" className="img-small" />

### Fitur Login

- **Toggle Password**: Klik ikon mata untuk menampilkan/menyembunyikan password
- **Validasi Real-time**: Form akan menampilkan error jika ada kesalahan
- **Redirect Otomatis**: Setelah login berhasil, Anda akan diarahkan ke dashboard sesuai peran

### Pesan Error Umum

| Error | Penyebab | Solusi |
|-------|----------|--------|
| "Invalid login credentials" | Email/password salah | Periksa kembali email dan password |
| "Email not confirmed" | Email belum diverifikasi | Cek email untuk link verifikasi |

---

## Registrasi (Daftar Akun Baru)

### Cara Mengakses Halaman Registrasi

1. Dari halaman login, klik link "Buat Akun Baru"
2. Atau akses langsung melalui URL: https://member.perpi.id/auth/signup

<img src={require('./img/auth/tombol_daftar.png').default} alt="Success Signup Page" className="img-small" />

### Proses Registrasi

1. **Isi Form Registrasi**:
   - Email (wajib)
   - Password (minimal 8 karakter)
   - Konfirmasi Password

2. **Validasi Password**: Sistem akan menampilkan aturan password:
   - Minimal 8 karakter
   - Mengandung huruf besar
   - Mengandung huruf kecil
   - Mengandung angka
   - Mengandung karakter khusus

3. **Klik "Buat Akun"**: Sistem akan mengirim email verifikasi

<img src={require('./img/auth/signup.png').default} alt="Signup Page" className="img-small" />

### Verifikasi Email

Setelah registrasi berhasil:

1. **Cek Email**: Buka kotak masuk email Anda
2. **Klik Link Verifikasi**: Klik link yang dikirim oleh sistem
3. **Konfirmasi**: Akun Anda akan aktif setelah verifikasi

:::info Contoh Email
<img src={require('./img/auth/email_signup.png').default} alt="Success Signup Page" className="img-medium" />
:::

:::warning Penting
Akun baru memiliki peran "member" secara default. Untuk peran lain (seperti pengurus), hubungi administrator.
:::

### Kirim Ulang Email Verifikasi

Jika tidak menerima email:

1. Klik tombol "Kirim Ulang Email Verifikasi"
2. Tunggu cooldown period (60 detik)
3. Periksa folder spam/junk

<img src={require('./img/auth/signup_success.png').default} alt="Success Signup Page" className="img-small" />

---

## Lupa Password

### Cara Reset Password

1. **Akses Halaman Reset**: Dari halaman login, klik "Lupa kata sandi?"
2. **Masukkan Email**: Ketik email yang terdaftar
3. **Klik "Kirim Email Reset"**: Sistem akan mengirim link reset
<img src={require('./img/auth/tombol_lupa_kata_sandi.png').default} alt="Tombol Lupa Password" className="img-small" />
<img src={require('./img/auth/forgot_password.png').default} alt="Forgot Password Page" className="img-small" />

### Proses Reset Password

1. **Cek Email**: Buka email reset password
2. **Klik Link Reset**: Klik link yang dikirim sistem
3. **Buat Password Baru**: Anda akan diarahkan ke halaman update password

:::info Contoh Email
<img src={require('./img/auth/email_reset_password.png').default} alt="Success Signup Page" className="img-medium" />
:::

<img src={require('./img/auth/update_password.png').default} alt="Update Password Page" className="img-small" />

### Tips Keamanan Password

- Gunakan kombinasi huruf besar, kecil, angka, dan simbol
- Minimal 8 karakter
- Jangan gunakan informasi pribadi
- Gunakan password yang unik untuk setiap akun

---

## Floating Button Manajemen Pengguna

### Lokasi dan Tampilan

Seletah anda berhasil login floating button manajemen pengguna muncul di pojok kanan bawah layar pada semua halaman.

<img src={require('./img/auth/floating_user_management.png').default} alt="User Management Toggle" className="img-small" />

### Fitur Floating Button

1. **Informasi Pengguna**:
   - Nama lengkap
   - Email
   - Badge peran (Leader/Committee/Member)

2. **Menu Aksi**:
   - **Kelola Akun**: Menuju halaman user management
   - **Logout**: Keluar dari sistem

---

## Pembuatan Pengguna oleh Leader
Terdapat laman yang digunakan untuk mengelola akses, peran, dan keamanan anggota tim dalam sistem Admin PERPI.

1. **Mengakses Halaman Pengguna**

Untuk memulai, navigasikan ke menu Pengguna pada sidebar di sisi kiri layar. Setelah berada di halaman Manajemen Pengguna, klik tombol Tambah Pengguna yang berada di pojok kanan atas.

<img src={require('./img/auth/create_user/leader_sidebar.png').default} alt="Halaman Manajemen Pengguna" className="img-small" />

2. **Form Tambah Pengguna Baru**

Setelah tombol diklik, akan muncul modal popup Tambah Pengguna Baru. Pastikan data yang dimasukkan akurat untuk keperluan audit.

<img src={require('./img/auth/create_user/tombol_add_user.png').default} alt="Halaman Manajemen Pengguna" className="img-medium" />
<img src={require('./img/auth/create_user/modal_add_user.png').default} alt="Halaman Manajemen Pengguna" className="img-small" />

1. Nama Lengkap: Masukkan nama lengkap pengguna yang akan didaftarkan.
2. Email: Gunakan format email resmi (contoh: user@perusahaan.com).
3. Peran: Pilih hak akses yang sesuai melalui menu dropdown.

:::warning Pembatasan Pembuatan Leader
Leader **tidak dapat** membuat akun Leader lainnya.  
Jika membutuhkan akun Leader tambahan, silakan **hubungi tim developer**.
:::

---

## Sistem Peran dan Kontrol Akses

### Hierarki Peran

```mermaid
graph TD
    A[Leader] --> B[Committee]
    A --> C[Finance]
    A --> D[Member]
    B --> D
    C --> D
```

### Deskripsi Peran

#### 1. Leader (Pemimpin)
- **Akses Penuh**: Semua fitur dan halaman
- **Manajemen Pengguna**: Dapat membuat, edit, hapus pengguna
- **Approval**: Menyetujui aplikasi keanggotaan
- **Dashboard**: https://member.perpi.id/leader

#### 2. Committee (Komite)
- **Manajemen Aplikasi**: Review dan proses aplikasi
- **Inspeksi**: Melakukan kunjungan kantor
- **Dashboard**: https://member.perpi.id/committee

#### 3. Finance (Keuangan)
- **Manajemen Pembayaran**: Kelola iuran tahunan
- **Invoice**: Buat dan kelola tagihan
- **Dashboard**: https://member.perpi.id/finance

#### 4. Member (Anggota)
- **Aplikasi Keanggotaan**: Submit dan track aplikasi
- **Profil Perusahaan**: Kelola data perusahaan
- **Dashboard**: https://member.perpi.id/member atau https://member.perpi.id/application

### Status Keanggotaan Member

Member memiliki status keanggotaan yang mempengaruhi akses:

| Status | Keterangan |
|--------|------------|
| `applicant` | Sedang proses aplikasi |
| `active_member` | Anggota aktif |
| `inactive_member` | Member di nonaktifkan karena tidak membayar iuran |

---

## Tips dan Best Practices

### Keamanan Akun

1. **Password Kuat**: Selalu gunakan password yang kompleks
2. **Logout**: Selalu logout setelah selesai menggunakan aplikasi
3. **Browser**: Jangan simpan password di browser publik
4. **Sharing**: Jangan bagikan kredensial login

### Troubleshooting Umum

#### Tidak Bisa Login
1. Refresh halaman setelah login
2. Periksa email dan password
3. Cek apakah email sudah diverifikasi
4. Coba reset password jika lupa
5. Hubungi administrator jika masih bermasalah

#### Tidak Menerima Email
1. Periksa folder spam/junk
2. Pastikan email address benar
3. Tunggu beberapa menit
4. Coba kirim ulang email

#### Akses Ditolak
1. Periksa peran akun Anda
2. Pastikan mengakses halaman yang sesuai
3. Hubungi leader untuk upgrade peran jika diperlukan

:::info Bantuan Lebih Lanjut
Jika mengalami masalah yang tidak tercantum dalam tutorial ini, hubungi administrator sistem atau leader organisasi untuk mendapatkan bantuan.
:::