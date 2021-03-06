const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.set('Content-Type', 'text/html');
	res.send('<h1>Hello World!</h1>');
});


// * define qualquer outra rota não definida
app.get('*', function(req, res){
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	  'ETag': '12345'
	});
	res.send('Oi!');
});

app.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});