'use strict'

const express = require('express');
const xml = require('xml');
const app = express();
const users = require('./array-query.json');

app.get('/user/', (req, res) => {
    const type = req.get('Content-Type');
    console.log(type);
    if (/text\/xml/i.test(type)){
        let xmlUsers = xml(users);
        res.set('Content-Type', 'application/xml');
        res.send(xmlUsers);
    } else if (/application\/json/i.test(type)) {
        res.json(users);
    } else {
        res.status(400).send('need heder with json o xml');
    }
});

app.listen(3000);