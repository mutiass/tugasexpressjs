const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/portosqlmutia', express.static(path.join(__dirname, 'portosqlmutia')));
app.use('/portosqlmutia2', express.static(path.join(__dirname, 'portosqlmutia2')));

app.use('/portosqlmutia', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia'));
});

app.use('/portosqlmutia2', (req, res) => {
    res.sendFile(path.join(__dirname, 'portosqlmutia2'));
});


app.listen(PORT, () => {
    console.log(`Server Berjalan di: http://localhost:${PORT}`);
});
