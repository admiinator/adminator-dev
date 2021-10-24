require('dotenv').config();
const express = require('express');
const https = require('https');
const app = express();
const path = require('path');
const fs = require('fs');

var port = process.env.HTTPSPORT || 8443;
var root = path.join(__dirname, '../');
var key = fs.readFileSync(root + 'res/cert/key.key');
var cert = fs.readFileSync(root + 'res/cert/cert.cert');


app.use(express.static(root + 'public'));

app.get('/', (req, res) => {
    res.sendFile(root + '/views/main.html');
});

https.createServer({ key: key, cert: cert }, app).listen(port, () => {
    console.log(`Server opened at port ${port}`);
});