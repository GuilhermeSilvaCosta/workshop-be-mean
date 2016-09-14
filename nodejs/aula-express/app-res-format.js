const express = require('express');
const app = express();

// Se não passar nada, executará o primeiro formato
app.get('/', function(req, res){
	res.format({
		'application/json': function(){
			res.send({message: 'hey'});
		},		
		'text/plain': function(){
			res.send('hey');
		},
		'text/html': function(){
			res.send('<p>hey</p>');
		},
		'default': function(){
			res.status(406).send('Not Acceptable');
		}
	});
});

app.listen(3000, function() {
	console.log('Servidor rodando em localhost:3000');
});