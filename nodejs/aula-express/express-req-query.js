'use strict'

const util = require('util');
const express = require('express');
const app = express();
const users = require('./array-query.json');

app.get('/user/', (req, res) => {
    util.log(req.query);
    res.json(req.query);
});

app.get('/find', (req, res) => {
    const q = req.query.q;
    const user = users.filter(u => q === u.name)[0];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ name: 'não encontrado' });
    }
});

app.listen(3000);