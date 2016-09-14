'use strict';

const express = require('express');
const app = express();
const arr = [
	{name: 'Guilherme'},
	{name: 'Jean' }
];

app.get('/', function(req, res){
	// res.json(null);
	// res.json({name: 'Guilherme'});
	res.json(arr);
});

app.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});