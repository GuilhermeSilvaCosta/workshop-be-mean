'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res){
	// res.send(new Buffer('buferinggggggg'));
	// res.send({algum: 'json'});
	// res.send('<h1>Algum HTML</h1>');
	// res.send(404,'Não achei!!');
	// res.status(404).send('Não achei');
	// res.send(500,{error: 'FUUUUUUUUUU'});
	res.send(200);
});

app.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});