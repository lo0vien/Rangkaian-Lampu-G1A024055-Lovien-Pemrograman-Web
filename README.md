# Website Rangkaian Lampu – Proyek Pemrograman Web

Halo! Saya **Lovien Najla Dhafiyah**, mahasiswi **Universitas Bengkulu** Program Studi **Informatika** Angkatan **2024** dengan **NPM G1A024055**.
Website ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah **Proyek Pemrograman Web**. Website ini berisi simulasi **rangkaian lampu** dengan dua skema:
* 1. Rangkaian **3 lampu**: Seri dan Paralel
* 2. Rangkaian **4 lampu**: Seri, Paralel, dan Group (AB & CD)
  
---

## Struktur Folder dan File
Berikut susunan direktori dalam proyek ini:

```
├── index.html  
├── css
│   └── style.css
├── js
│   └── index.js
└── images
    ├── on.jpg
    └── of.jpg
```

### Penjelasan Struktur

1. **Folder css**
   Berisi file `style.css` yang mengatur seluruh tampilan website (UI), termasuk warna background, tombol, layout, dan efek hover.

2. **Folder js**
   Berisi file `script.js` yang mengatur logika interaktif lampu, termasuk seri, paralel, dan group.

3. **Folder images**
   Berisi gambar lampu dalam keadaan `on.jpg` dan `of.jpg` yang digunakan untuk simulasi lampu.

4. **File index.html**
   Halaman utama website yang menampilkan kedua rangkaian lampu lengkap dengan navbar dan tombol interaktif.

---

## Kode yang Dihighlight

Berikut beberapa bagian kode penting dalam proyek ini.

### 1. Menautkan CSS dan JS

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

Kode ini menghubungkan file CSS untuk styling dan file JS untuk logika lampu.

---

### 2. Membuat Navbar untuk Navigasi

```html
<div class="navbar">
    <a href="#lampu3">Rangkaian 3 Lampu</a>
    <a href="#lampu4">Rangkaian 4 Lampu</a>
</div>
```

Navbar ini memudahkan pengunjung untuk berpindah antar bagian rangkaian lampu di halaman yang sama.

---

### 3. Membuat Rangkaian Lampu Interaktif

```html
<img id="l1" src="images/of.jpg">
<img id="l2" src="images/of.jpg">
<img id="l3" src="images/of.jpg">

<button class="btn-seri3" onclick="seri3()">Seri</button>
<button class="btn-paralel3" onclick="paralel3()">Paralel</button>

<h3 id="status1"></h3>
```

Kode ini menampilkan lampu dan tombol yang bisa mengubah status lampu satu per satu atau semua sekaligus.

---

### 4. Logika Lampu di JS

```javascript
let step3=0, direction3="on", semuaOn3=false;

function seri3(){
    const lampu=[l1,l2,l3];
    if(direction3==="on"){ ... } else { ... }
}
```

Kode ini mengatur pola nyala-mati lampu secara **seri satu per satu** dan mengubah statusnya pada halaman.

---

## Tujuan Pembuatan Website

Website ini dibuat sebagai media pembelajaran **interaktif** dalam memahami konsep:

* HTML dasar dan struktur folder
* CSS untuk styling dan efek hover
* JavaScript untuk logika interaktif lampu
* Penggunaan gambar sebagai elemen visual

Website ini juga memudahkan pemahaman konsep **rangkaian listrik digital** melalui simulasi interaktif.

---

Terima kasih telah mengunjungi dan membaca README ini.
