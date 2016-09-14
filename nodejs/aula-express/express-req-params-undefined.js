'use strict'

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:email', (req, res) => {
    const id = req.params.id;
    //id é undefined
    util.log(`o id é ${id}`);
    let params = util.inspect(req.params);
    util.log(`os parametros são ${params}`);
    res.send(`user ${id}`);
});

app.listen(3000);