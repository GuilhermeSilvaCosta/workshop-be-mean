'use strict'

const http = require('http');
const Controller = require('./controller');
const url = require('url');

http.createServer((req, res) => {
	const url_parts = url.parse(req.url);
	switch(url_parts.pathname){
		case '/api/users/create':			
			Controller.create(req, res);
			break;
		case '/api/users/retrieve':			
			Controller.find(req, res);
			break;
		case '/api/users/get':			
			Controller.findOne(req, res);
			break;			
		case '/api/users/update':
			Controller.update(req, res);
			break;
		case '/api/users/delete':
			Controller.remove(req, res);
			break;
		default:			
			res.end('ROTA NÃO ENCONTRADA');
			break;					
	}	
}).listen(3000, () => {
	console.log('Servidor rodando em localhost:3000');
});
