const express = require('express');
const app = express();

app.get('/html', function(req, res){
	res.type('html');
	res.send('<h1>Hello World!</h1>');
});

app.get('/json', function(req, res){
	res.type('json');
	res.send({message: 'Hello World'});
});

app.listen(3000, function() {
	console.log('Servidor rodando em localhost:3000');
});