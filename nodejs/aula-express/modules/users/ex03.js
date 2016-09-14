// ex03.js
'use strict'

const express = require('express');
const app = express();
const UserModel = require('./organism');

app.get('/find', (req,res) =>{
    const q = req.query.q;
    const query = {name: q};
    const type = req.get('Content-Type');
    console.log(type);
    UserModel.retrive(res, query, type);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});