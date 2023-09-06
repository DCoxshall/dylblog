const path = require('path');
const express = require('express')
var http = require('http')
var https = require('https')
const app = express();

app.use(express.static(path.join(__dirname, "..", "react-app", "build")));
app.use(express.static("public"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "react-app", "build/index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

// http.createServer(app).listen(80, () => {
//     console.log(`Example app listening on 80`);
// })
https.createServer(app).listen(443);
