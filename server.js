const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline trigger test #2');


});

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
};

https.createServer(options, app).listen(3000, () => {
  console.log('Secure server running at https://localhost:3000');
});
