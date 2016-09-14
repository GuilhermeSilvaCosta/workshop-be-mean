'use strict'

const express = require('express');
const app = express();

app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`user name ${name}`);
});

app.listen(3000);