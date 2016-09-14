'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse application/json(ajax)
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded(form)
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.set('Content-type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);    
});

app.listen(3000);