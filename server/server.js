const express = require('express');
const path = require('path');
const app = express();
const process = require('process');
const fs = require('fs');

const PORT = 80;

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unknown error in server setup.");
  } else {
    console.log("Server listening on port:", PORT);
  }
});
