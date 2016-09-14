'use strict'

require('./modules/pokemons/db-config');
const express = require('express');
const app = express();
const Pokemon = require('./modules/pokemons/organism');


app.get('/pokemons', (req,res) => {

const query = {};

let page = req.query.page;
if (page === undefined) page = 1;
//console.log(page);
 Pokemon.find(res, query, page);
});

app.listen(3000,() => {
    console.log('Servidor executando na porta 3000.');
});