---
slug: update-autentikasi-otp
title: "Update Autentikasi: Implementasi Verifikasi OTP & Peningkatan UX"
authors: [dev-team]
tags: [authentication, otp, ux, security, sign-up, forgot-password]
date: 2026-02-22
---

Pembaruan ini mengubah mekanisme verifikasi autentikasi dari yang sebelumnya berbasis *magic link* (tautan lewat email) menjadi **kode OTP (One-Time Password)**. Selain itu, alur *Sign Up* dan *Forgot Password* kini dirancang ulang menjadi lebih ringkas, jelas, dan mudah diikuti dengan pendekatan *step-by-step form*.

## ℹ️ Informasi Rilis

| Informasi | Detail |
| :--- | :--- |
| **Tanggal Rilis** | Sabtu, 22 Februari 2026 |
| **Status** | ✅ Deployed (Production) |
| **Tipe Update** | Security Enhancement & UX Improvement |

---

### 1. Latar Belakang Perubahan

Sistem verifikasi lama mengandalkan *magic link* yang dikirimkan ke email pengguna. Meski terlihat sederhana, pendekatan ini menimbulkan sejumlah masalah yang sering dialami pengguna di lapangan.

<div className="row">
  <div className="col col--6">
    <h4>🚫 Metode Lama (Magic Link)</h4>
    <ul>
      <li>Tautan kadang rusak atau tidak terbaca oleh mail client tertentu.</li>
      <li>Pengguna yang membuka email di perangkat atau browser berbeda tidak bisa melanjutkan proses verifikasi.</li>
      <li>Muncul <em>unknown error</em> yang sulit didiagnosis dan tidak memberi informasi jelas kepada pengguna.</li>
    </ul>
  </div>
  <div className="col col--6">
    <h4>✅ Metode Baru (OTP)</h4>
    <ul>
      <li>Kode OTP 6 digit dikirim ke email dan diinput langsung di halaman yang sama.</li>
      <li>Tidak bergantung pada browser atau perangkat — cukup salin kode, masukkan, selesai.</li>
      <li>Pesan error lebih spesifik: kode kedaluwarsa, kode salah, atau limit percobaan terlampaui.</li>
    </ul>
  </div>
</div>

---

### 2. Perubahan Alur Verifikasi

<div className="row">
  <div className="col col--6">
    <h4>🚫 Sebelum — Magic Link</h4>
    <div className="card shadow--md">
      <div className="card__image">
        <img
          src="\img\pembaruan\2026-02-22-update-autentikasi-otp\email_link.png"
          alt="Tampilan email magic link lama"
          style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
        />
      </div>
      <div className="card__body">
        <p>Pengguna menekan tombol di email → browser baru terbuka → proses sering gagal di tengah jalan karena tautan rusak, sesi tidak cocok, atau error tidak diketahui.</p>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <h4>✅ Sesudah — OTP</h4>
    <div className="card shadow--md">
      <div className="card__image">
        <img
          src="\img\pembaruan\2026-02-22-update-autentikasi-otp\email_otp.png"
          alt="Tampilan input OTP baru"
          style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
        />
      </div>
      <div className="card__body">
        <p>Pengguna membuka email → menyalin kode 6 digit → memasukkan kode di halaman yang sudah terbuka → verifikasi selesai tanpa berpindah sesi atau browser.</p>
      </div>
    </div>
  </div>
</div>

:::info Mengapa OTP Lebih Andal?
Kode OTP tidak bergantung pada integritas URL maupun konsistensi sesi browser. Selama pengguna bisa membaca email dan mengetikkan 6 angka, verifikasi akan berhasil.
:::

---

### 3. Perubahan Alur Form: Step-by-Step dengan Indikator Progres

Sebelumnya, seluruh isian *Sign Up* maupun *Forgot Password* ditampilkan sekaligus dalam satu halaman. Kini, kedua alur tersebut dipecah menjadi **langkah-langkah bertahap** yang dilengkapi **indikator progres** di bagian atas halaman.

<div className="row">
  <div className="col col--6">
    <h4>🚫 Alur Lama (Single Page Form)</h4>
    <div className="card shadow--md">
      <div className="card__image">
        <img
          src="\img\auth\signup.png"
          alt="Form sign up lama dalam satu halaman"
          style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
        />
      </div>
      <div className="card__body">
        <p>Semua field ditampilkan sekaligus. Tidak ada panduan urutan, dan kesalahan di satu bagian membuat seluruh form terasa berat untuk diulang.</p>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <h4>✅ Alur Baru (Multi-Step Form)</h4>
    <div className="card shadow--md">
      <div className="card__image">
        <img
          src="\img\pembaruan\2026-02-22-update-autentikasi-otp\signup_3.png"
          alt="Form sign up baru dengan indikator progres"
          style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
        />
      </div>
      <div className="card__body">
        <p>Setiap langkah fokus pada satu tugas. Indikator progres menampilkan langkah yang sudah selesai (✅), sedang aktif (🔵), dan belum dilalui (⚪).</p>
      </div>
    </div>
  </div>
</div>

---

### 4. Rincian Alur Baru

#### A. Alur Sign Up

<div className="card shadow--md" style={{marginBottom: '1rem', maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\signup_1.png"
      alt="Sign Up: Langkah 1 - Email & Password"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 1 — Email & Password</strong><br/>Pengguna mengisi alamat email dan membuat kata sandi. Validasi format dilakukan langsung sebelum lanjut ke langkah berikutnya.</p>
  </div>
</div>

<div className="card shadow--md" style={{maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\signup_2.png"
      alt="Sign Up: Langkah 2 - Verifikasi OTP"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 2 — Verifikasi Email (OTP)</strong><br/>Kode OTP 6 digit dikirim ke email. Pengguna menyalin kode dan memasukkannya di halaman yang sama. Tersedia opsi <em>kirim ulang kode</em> dengan countdown timer.</p>
  </div>
</div>

<div className="card shadow--md" style={{maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\signup_3.png"
      alt="Sign Up: Langkah 3 - Nama PIC & Perusahaan"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 3 — Nama PIC & Perusahaan</strong><br/>Setelah email terverifikasi, pengguna melengkapi informasi profil berupa nama penanggung jawab (PIC) dan nama perusahaan.</p>
  </div>
</div>

#### B. Alur Forgot Password

<div className="card shadow--md" style={{maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\forgot_password_1.png"
      alt="Forgot Password: Langkah 1 - Masukkan Email"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 1 — Masukkan Email</strong><br/>Pengguna memasukkan alamat email yang terdaftar.</p>
  </div>
</div>

<div className="card shadow--md" style={{maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\forgot_password_2.png"
      alt="Forgot Password: Langkah 2 - Verifikasi OTP"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 2 — Verifikasi Email (OTP)</strong><br/>Kode OTP dikirim ke email tersebut. Pengguna memasukkan kode untuk membuktikan kepemilikan akun.</p>
  </div>
</div>

<div className="card shadow--md" style={{maxWidth: '480px', margin: '0 auto 1rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\forgot_password_3.png"
      alt="Forgot Password: Langkah 3 - Buat Kata Sandi Baru"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p><strong>Langkah 3 — Buat Kata Sandi Baru</strong><br/>Setelah OTP terverifikasi, pengguna langsung diminta mengisi kata sandi baru beserta konfirmasinya.</p>
  </div>
</div>

---

### 5. Peningkatan Desain & Keterbacaan

<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__image">
    <img
      src="\img\pembaruan\2026-02-22-update-autentikasi-otp\new_design.png"
      alt="Perbandingan desain lama dan baru"
      style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    />
  </div>
  <div className="card__body">
    <p>tampilan antarmuka sesudah pembaruan desain.</p>
  </div>
</div>

- **Hierarki visual lebih bersih** — judul, instruksi, dan field input memiliki jarak dan ukuran yang proporsional, tidak lagi terasa penuh.
- **Pesan instruksi lebih eksplisit** — setiap langkah dilengkapi keterangan singkat tentang apa yang perlu dilakukan dan mengapa.
- **Penanganan error lebih informatif** — pesan kesalahan kini menjelaskan penyebab spesifik, 
- **Tombol aksi lebih kontekstual** — teks tombol menyesuaikan langkah aktif (misalnya "Lanjutkan ke Verifikasi", "Verifikasi", "Selesaikan Pendaftaran").

:::tip Dampak untuk Pengguna
Kombinasi OTP dan alur bertahap ini secara signifikan mengurangi kebingungan dan kegagalan di tengah proses. Pengguna kini tahu di mana mereka berada, apa yang harus dilakukan, dan mendapat umpan balik yang jelas jika terjadi kesalahan.
:::