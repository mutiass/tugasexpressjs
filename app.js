const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/portosqlmutia', express.static(path.join(__dirname, 'portosqlmutia')));
app.use('/portosqlmutia2', express.static(path.join(__dirname, 'portosqlmutia2')));

app.get('/portosqlmutia', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia', 'index.html'));
});

app.get('/portosqlmutia2', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia2', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ekspor app untuk digunakan oleh Vercel
module.exports = app;
