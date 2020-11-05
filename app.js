'use strict';
const port = process.env.port || 3000;
const express = require('express');
const app = express();
const packageName = require('packageName')

app.get('/', (req, res) => {
    res.send("hey my web site");
});
app.listen(port, () => {
    console.log("listening");
});