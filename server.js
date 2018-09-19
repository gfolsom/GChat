'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/start', (req, res) => {
  res.sendFile(path.join(__dirname +'/index.html'));
});

app.use(express.static('./'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);