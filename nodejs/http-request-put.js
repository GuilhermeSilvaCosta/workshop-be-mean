'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
		name: 'Guilherme Alemão',
	});
const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'PUT',
	path: '/api/pokemons/578c3616d2870111009e63b2',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}	
};


function callback(res){
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));	

	let data = '';

	res.setEncoding('utf-8');
	res.on('data', function(chunk){
		data += chunk;
	});

	res.on('end', function(){
		console.log('Dados finalizados: ',data);
	});
}

const req = http.request(options, callback);

req.on('error', function(e){
	console.log('ERROOOOO: ' + e.message);
});
req.write(postData);
req.end();