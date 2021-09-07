# FTP Server / Transfer File Server Using NodeJS and Termux

Transfer File Server / FTP Server ini dapat digunakan untuk mengupload semua jenis file ke android melalui server local yang dibuat oleh express js, ini bisa jadi alternative dari aplikasi transfer file antar device (PC, Laptop, Android, Iphone, Ipad, dll) karena servernya di akses melalui web browser

## Getting Started

### Dependencies

* Aplikasi Termux, Termux:api, Termux:widget
* Google Playstore (Android) (tidak support untuk IOS karena termux tidak ada di Apple Store (jika ada berarti bisa menggunakan ini))
* nodejs-lts (termux), git, nano, yarn, termux-api

### Installing

* Install Aplikasi Termux, Termux:api, Termux:widget di Google Playstore
* Untuk cara pasang Termux:widget bisa cari di google ya
* Buka Termux lalu ketik
```
pkg update && pkg upgrade
termux-setup-storage
pkg install nodejs-lts git nano yarn termux-api
```
* Clone github repository
```
git clone https://github.com/bobbyrahmanda13/transferFile
```
* Masuk ke dalam File yang sudah di Clone 
```
cd transferFile
```
* Jalankan install.sh
```
bash install.sh
```
* Jika error di bagian folder .shortcuts tidak ada maka bikin dulu folder nya, tapi biasanya jika sudah di install termux:widget dan sudah di munculkan ke halaman android maka folder tersebut sudah ada
* gunakan ```mkdir .shortcuts``` jika belum ada foldernya, harus di luar folder transferFile ya
* jika sudah ada masuk lagi ke dalam folder transferFile
* karena install.sh sudah dijalankan maka tidak usah dijalankan lagi cukup pindah kan file bagiFile.sh ke dalam folder .shortcuts dengan cara
``` 
mv bagiFile.sh ../.shortcuts
chmod +x ../.shortcuts/bagiFile.sh
```
* Jika sudah tinggal refresh Termux:widget yang sudah ada di halaman android dan akan muncul nama file bagiFile.sh
* lalu klik nama file bagiFile.sh itu dan buka bagian notifikasi pada android dimana file bagiFile.sh dijalankan
* nanti termux akan kelihatan dibagian notifikasi lalu klik notifikasi nya
* setelah itu termux akan terbuka dan script file bagiFile.sh tersebut dijalankan
* Done, Selamat Menikmati


## Authors

[@Rahman](https://t.me/Rahman_0000)
