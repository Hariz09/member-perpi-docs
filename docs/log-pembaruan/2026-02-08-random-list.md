---
slug: update-random-list
title: Fitur Pengacakan Daftar Nama (Random Sorting)
authors: [dev-team]
tags: [sorting, randomizer, fairness, ui-ux]
date: 2026-02-08
---

Pembaruan ini mengubah logika tampilan daftar nama (*list view*) dari yang sebelumnya statis (urut abjad) menjadi dinamis (acak/random). Perubahan ini dilakukan untuk memberikan keadilan eksposur bagi setiap individu dalam daftar.

## ℹ️ Informasi Rilis

| Informasi | Detail |
| :--- | :--- |
| **Tanggal Rilis** | Minggu, 8 Februari 2026 |
| **Status** | ✅ Deployed (Production) |
| **Tipe Update** | Enhancement & Logic Update |

---

### 1. Latar Belakang Perubahan

Sebelumnya, sistem menggunakan metode pengurutan berdasarkan abjad (A-Z). Hal ini menimbulkan ketidakadilan di mana nama yang berawalan huruf "A" akan selalu berada di posisi paling atas, sementara huruf "Z" selalu di bawah.

<div className="row">
  <div className="col col--6">
    <h4>🚫 Metode Lama (A-Z)</h4>
    <p>Urutan statis. Orang dengan nama awalan huruf awal selalu mendapat keuntungan posisi pertama.</p>
  </div>
  <div className="col col--6">
    <h4>✅ Metode Baru (Fair Random)</h4>
    <p>Setiap kali halaman dimuat, urutan diacak total. Semua orang punya peluang 10% (jika 10 orang) untuk di posisi 1.</p>
  </div>
</div>

---

### 2. Demonstrasi Perubahan (Refresh Test)

Sistem menggunakan algoritma *Fisher-Yates Shuffle* untuk memastikan setiap penyegaran (*refresh*) halaman menghasilkan kombinasi urutan yang baru dan unik.

Berikut adalah simulasi tampilan saat halaman di-refresh beberapa kali:

#### A. Tampilan Awal
<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__image">
    <img src="/img/pembaruan/2026-02-08-random-list/example_1.png" alt="Tampilan Urut Abjad" className="img-large" style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} />
  </div>

</div>

#### B. Percobaan Refresh ke-1
<div className="card shadow--md" style={{marginBottom: '2rem'}}>
  <div className="card__image">
    <img src="/img/pembaruan/2026-02-08-random-list/example_2.png" alt="Tampilan Acak Pertama" className="img-large" style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} />
  </div>
  <div className="card__body">
    <p><strong>Kondisi 2:</strong> Halaman di-refresh. Urutan berubah total secara acak.</p>
  </div>
</div>

#### C. Percobaan Refresh ke-2
<div className="card shadow--md">
  <div className="card__image">
    <img src="/img/pembaruan/2026-02-08-random-list/example_3.png" alt="Tampilan Acak Kedua" className="img-large" style={{marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} />
  </div>
  <div className="card__body">
    <p><strong>Kondisi 3:</strong> Halaman di-refresh kembali. Urutan berubah lagi menjadi kombinasi yang berbeda dari sebelumnya.</p>
  </div>
</div>

<br/>

:::tip Apa Artinya?
Perubahan posisi yang terus-menerus ini membuktikan bahwa sistem **tidak memiliki pola tetap**. Posisi nomor 1 bukanlah "settingan", melainkan murni hasil pengacakan matematis saat itu juga.
:::