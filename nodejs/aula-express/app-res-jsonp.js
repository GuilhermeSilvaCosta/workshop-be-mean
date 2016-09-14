'use strict';

const express = require('express');
const app = express();
const arr = [
	{name: 'Guilherme'},
	{name: 'Jean' }
];

app.get('/', function(req, res){
	// res.jsonp(null);
	// res.jsonp({name: 'Guilherme'});
	// res.jsonp(arr);
	res.status(202).jsonp(arr);
});

app.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});