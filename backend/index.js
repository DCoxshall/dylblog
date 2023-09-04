const path = require('path');
const express = require('express')
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "..", "react-app", "build")));
app.use(express.static("public"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "react-app", "build/index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
})
