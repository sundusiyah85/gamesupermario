# Musik untuk Cloudflare

## Tujuan
Memastikan musik tetap tersedia saat game dijalankan dari Cloudflare, tanpa bergantung pada alamat aset milik Lovable.

## Perubahan
1. Ambil kembali berkas musik asli dari penyimpanan aset saat ini dan simpan sebagai berkas publik `public/game/mario.mp3` agar ikut dalam salinan GitHub.
2. Ubah pemutar musik agar meminta `/game/mario.mp3`, bukan alamat khusus Lovable.
3. Periksa hasil keluaran aplikasi dan pastikan permintaan musik berhasil. Setelah perubahan tersinkron ke GitHub, Cloudflare perlu membangun ulang situs.

## Detail teknis
- Halaman game saat ini meminta `/__l5e/assets-v1/.../mario.mp3`; folder `public/game/` hanya berisi `index.html`, jadi musik tidak ikut saat proyek diterbitkan di luar Lovable.
- Asumsi: berkas MP3 sekitar 1,3 MB boleh disertakan di repositori agar deployment Cloudflare mandiri; tidak perlu menyiapkan bucket Cloudflare terpisah.