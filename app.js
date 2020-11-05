'use strict';
const port = process.env.port || 3000;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("hey my web site");
});
