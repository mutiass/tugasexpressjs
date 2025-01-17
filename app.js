const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Menyajikan file 'index.html' di '/portosqlmutia'
app.get('/portosqlmutia', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia', 'index.html'));
});

// Menyajikan file 'index.html' di '/portosqlmutia2'
app.get('/portosqlmutia2', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia2', 'index.html'));
});

// Menyajikan file statis dari folder 'portosqlmutia' (termasuk gambar dan file lainnya)
app.use('/portosqlmutia', express.static(path.join(__dirname, 'portosqlmutia')));

// Menyajikan file statis dari folder 'portosqlmutia2' (termasuk gambar dan file lainnya)
app.use('/portosqlmutia2', express.static(path.join(__dirname, 'portosqlmutia2')));

// Menjalankan server di port 3000
app.listen(PORT, () => {
    console.log(`Server Berjalan di: http://localhost:${PORT}`);
});
