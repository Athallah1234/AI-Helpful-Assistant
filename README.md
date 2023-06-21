# AI Helpful Assistant

## Deskripsi 
**AI Helpful Assistant adalah aplikasi asisten virtual yang dibuat dengan HTML, CSS, JavaScript, dan PHP.**

## Fitur 
Berikut adalah beberapa fitur yang tersedia:
1. Memiliki kemampuan untuk menjawab pertanyaan Anda di berbagai bidang, seperti teknologi, wisata, kuliner, dan lain sebagainya.
2. Kemampuan untuk melakukan perhitungan matematika dengan berbagai macam operator, seperti penambahan, pengurangan, perkalian, dan pembagian.
3. Dapat melakukan konversi unit, seperti jarak, waktu, serta segala macam bentuk satuan yang umum digunakan.
4. Dapat membantu Anda dalam mencari informasi dan mengirimkan hasil pencarian langsung ke Anda.

## Cara menggunakan 
1. Jelaskan tugas yang ingin dilakukan oleh AI Helpful Assistant.
2. AI Helpful Assistant akan memberikan tanggapan sesuai dengan permintaan yang diajukan.

# Resources
Beberapa sumber daya yang digunakan dalam pengembangan aplikasi ini:
1. [HTML](https://id.wikipedia.org/wiki/HTML) (Hypertext Markup Language)
2. [CSS](https://id.wikipedia.org/wiki/Cascading_Style_Sheets) (Cascading Style Sheets)
3. [JavaScript](https://id.wikipedia.org/wiki/JavaScript)
4. [PHP](https://id.wikipedia.org/wiki/PHP) (Hypertext Preprocessor)
5. [API KEY CHATGPT OPENAI](https://platform.openai.com/account/api-keys)

# Cara Install AI Helpful Assistant 
## Persyaratan Sistem Pastikan sistem Anda memenuhi persyaratan sistem berikut sebelum memulai instalasi: 
- Sistem Operasi Windows 64bit (seperti Windows 7 64bit, Windows 10 64bit, dan Windows 11 64bit) atau Linux (seperti Ubuntu, Debian, CentOS)
- Web Server (e.g. Apache)
- PHP 7.0 atau lebih baru
- MySQL atau database lainnya
- Browser web yang mendukung HTML, CSS, JavaScript, dan PHP seperti Google Chrome, Firefox, dan Opera
## Langkah-langkah Install 
- Windows
   1. Download file AI Helpful Assistant dari GitHub [di sini](https://github.com/Athallah1234/Helpful-Assistant/archive/refs/heads/main.zip).
   2. Belum menggunakan web server? Silakan download dan install XAMPP atau WAMP dari halaman resminya [XAMPP](https://www.apachefriends.org/download.html) atau [WAMP](https://sourceforge.net/projects/wampserver/files/).
   3. Simpan file tersebut pada direktori `htdocs/[nama-folder-yang-anda-buat]` pada server lokal Anda. Direktori ini dapat ditemukan di `C:\xampp\htdocs` (jika menggunakan XAMPP) atau `C:\wamp\www` (jika menggunakan WAMP).
   4. Setelah itu, buka web browser dan akses `http://localhost/[nama-folder-yang-anda-buat]/index.html` pada web server Anda.
   5. Jika terjadi Error atau AI menjawab `Failed to retrieve a valid response from the ChatGPT API.` masukkan [API KEY OPENAI](https://platform.openai.com/account/api-keys) ke dalam file chatbot.php
   ```
   $apiKey = 'API-KEY';
   ```
   6. Jika tidak Terjadi Error, Selamat! Anda telah berhasil menginstall AI Helpful Assistant. Jika mengalami kendala dalam proses penginstallan, silakan [buka issue baru](https://github.com/Athallah1234/AI-Helpful-Assistant/issues/2) pada halaman GitHub kami atau hubungi kami di email kami di [helpful.assistant@gmail.com](mailto:helpful.assistant@gmail.com).
- Ubuntu
   1. Download file AI Helpful Assistant dari GitHub dengan Perintah : `git clone https://github.com/Athallah1234/AI-Helpful-Assistant.git`
   2. Belum menggunakan web server? Silakan download dan install [LEMP](https://www.niagahoster.co.id/blog/cara-install-lemp-di-ubuntu/) atau [LAMP](https://www.linuxid.net/24341/cara-install-lamp-linux-apache-mysql-php-stack-di-ubuntu/)
   4. Simpan file tersebut pada direktori `/var/html/www/[nama-folder-yang-anda-buat]`
   5. Setelah itu, buka web browser dan akses `http://localhost/[nama-folder-yang-anda-buat]/index.html` pada web server Anda.
   6. Jika terjadi Error atau AI menjawab `Failed to retrieve a valid response from the ChatGPT API.` masukkan [API KEY OPENAI](https://platform.openai.com/account/api-keys) ke dalam file chatbot.php
   ```
   $apiKey = 'API-KEY';
   ```
   6. Jika tidak Terjadi Error, Selamat! Anda telah berhasil menginstall AI Helpful Assistant. Jika mengalami kendala dalam proses penginstallan, silakan [buka issue baru](https://github.com/Athallah1234/AI-Helpful-Assistant/issues/2) pada halaman GitHub kami atau hubungi kami di email kami di [helpful.assistant@gmail.com](mailto:helpful.assistant@gmail.com).

# Pertanyaan AI Helpful Assistant
### 1. Apa itu AI?
**Jawaban** : **AI(Artificial Intellegence), atau Kecerdasan Buatan, merupakan sebuah teknologi yang memperbolehkan mesin untuk melaksanakan suatu tindakan yang biasanya akan memerlukan kecerdasan manusia. AI memungkinkan mesin untuk belajar, memecahkan masalah, merespons input, serta menyajikan hasil yang efektif atau efisien.**
### 2. Bagaimana cara kerja AI?
**Jawaban** : **Sistem AI terdiri dari tiga komponen dasar: input (informasi), proses (tindakan), serta output (hasil). Input diberikan ke sistem AI melalui teknologi seperti kamera atau mikrofon. Proses berlangsung pada algoritma yang diprogram untuk memproses data input dan menjalankan suatu aksi. Akhirnya, output dapat berupa tampilan visual, suara, atau bahkan perintah yang dijalankan oleh perangkat tambahan.**
### 3. Apa yang membedakan AI dengan machine learning?
**Jawaban** : **AI adalah konsep yang lebih luas untuk setiap jenis mesin yang dapat meniru kecerdasan manusia. Sebaliknya, machine learning merujuk pada cara khusus di mana mesin belajar melakukan tindakan yang lebih cerdas dengan melibatkan sebuah proses dari train, test, dan deploy. Di sini algoritma akan belajar secara otomatis dari data yang sudah disediakan.**
### 4. Apa itu AI Helpful Assistant?
**Jawaban** : **AI Helpful Assistant adalah sebuah program komputer yang dirancang oleh [Athallah1234](https://github.com/Athallah1234) untuk membantu dalam berbagai tugas dengan cara memberikan informasi dan menjawab pertanyaan yang diajukan oleh pengguna. Saya bisa menjawab pertanyaan dan memberikan saran untuk berbagai topik seperti berita, kesehatan, teknologi, dan banyak lagi. Saya juga bisa membantu dalam melakukan beberapa tugas seperti mengatur jadwal, mencari informasi tentang produk atau layanan, dan lain sebagainya.**
### 5. Apakah AI Helpful Assistant terbuat dari Teknologi AI(Artificial Intellegence)?
**Jawaban** : **Ya, AI Helpful Assistant adalah asisten virtual yang dibuat menggunakan teknologi AI (Artificial Intelligence) atau kecerdasan buatan. Saya dirancang untuk membantu Anda dengan tugas-tugas tertentu dan memberikan informasi yang akurat dan berguna.**
### 6. Apa yang harus saya lakukan jika AI Helpful Assistant tidak memberikan jawaban yang benar?
**Jawaban** : **Jika AI Helpful Assistant tidak memberikan jawaban yang benar, silakan mencoba mengajukan pertanyaan atau memberikan perintah dengan cara yang berbeda atau lebih spesifik agar saya dapat memberikan jawaban yang sesuai. Jika masih terjadi masalah, silakan hubungi tim pembuat AI Helpful Assistant untuk memperbaikinya.**
### 7. Dari mana AI Helpful Assistant memperoleh pengetahuannya?
**Jawaban** : **Saya memperoleh pengetahuannya dari sumber data yang terpercaya dan berkualitas seperti database publik, jurnal akademik, situs web resmi, dan dokumentasi terverifikasi. Selain itu, saya terus belajar dan ditingkatkan oleh pengembang saya untuk memastikan bahwa saya memberikan jawaban yang akurat dan bermanfaat kepada pengguna saya.**
### 8. Apakah saya harus membayar untuk menggunakan AI Helpful Assistant?
**Jawaban** : **Untuk sementara waktu, Helpful Assistant bisa digunakan secara gratis.**
### 9. Apakah saya bisa mengajukan fitur baru untuk AI Helpful Assistant?
**Jawaban** : **Tentu saja! Kami sangat terbuka untuk saran dan masukan baru. Anda dapat mengirimkan saran fitur melalui fitur ["Issues"](https://github.com/Athallah1234/AI-Helpful-Assistant/issues/3) pada Github.**

# Kontribusi
**Untuk kontribusi pada proyek dengan lisensi, pastikan Anda mematuhi aturan kode etik komunitas serta lisensi yang digunakan. Untuk melindungi diri Anda, pastikan Anda memahami konteks penggunaan lisensi dan bahwa Anda tidak melanggar hak cipta atau hak kekayaan intelektual milik pembuat karya cipta.**

# Lisensi AI. 
### MIT License
**Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.**

## Lisensi Aplikasi ini dilindungi oleh lisensi [MIT](https://opensource.org/licenses/MIT). Lihat berkas [LICENSE](https://github.com/Athallah1234/Helpful-Assistant/blob/main/LICENSE) untuk informasi lebih lanjut.
## Ketentuan Lisensi 
1. **Hak Cipta**: Seluruh hak cipta AI ini sepenuhnya dimiliki oleh [Athallah1234](https://github.com/Athallah1234).
2. **Penggunaan**: AI ini hanya dapat digunakan untuk keperluan non-komersial dan pribadi saja. Penggunaan untuk keperluan komersial dan publik hanya diperbolehkan dengan izin tertulis dari [Athallah1234](https://github.com/Athallah1234).
3. **Modifikasi**: Anda diperbolehkan untuk memodifikasi AI ini untuk tujuan pribadi, tetapi Anda tidak diperbolehkan untuk menyebarkan hasil modifikasi secara publik.
4. **Distribusi**: Anda diperbolehkan untuk menyebarluaskan AI ini kepada orang lain, selama tujuannya tidak bersifat komersial dan Anda mencantumkan kredit kepada [Athallah1234](https://github.com/Athallah1234).
5. **Tidak Menjual**: Dilarang keras untuk menjual AI ini kepada siapapun tanpa izin tertulis dari [Athallah1234](https://github.com/Athallah1234).
