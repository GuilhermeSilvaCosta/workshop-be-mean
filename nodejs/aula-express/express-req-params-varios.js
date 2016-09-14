'use strict'

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:id/:name/:email/:cpf', (req, res) => {
    const id = req.params.id;    
    util.log(`o id é ${id}`);
    const params = JSON.stringify(req.params);
    if(util.isObject(req.params)){
        console.log('é um objeto');
    }
    util.log(`os parametros são ${params}`);
    res.json(req.params)
});

app.listen(3000);