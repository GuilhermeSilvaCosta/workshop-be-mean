'use strict'

const express = require('express');
const app = express();
const util = require('util');
const UserModel = require('./organism');

 app.get('/find', (req,res) =>{
     const q = req.query.q;
     console.log(q);
     const query = {name: q};
     UserModel.retrive(res, query);    
 });


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});