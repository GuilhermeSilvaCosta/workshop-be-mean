'use strict';

const http = require('http');

const options = {
	host: 'api.redtube.com',
	path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'	
};

function callback(res){
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');
	res.on('data', function(chunck){
		data += chunck;
	});

	res.on('end', function(){
		console.log('Dados finalizados: ', data);
	});
}

const req = http.request(options, callback);

req.on('error', function(e){
	console.log('ERROOOOOOO: ' + e.message);
});

req.end();