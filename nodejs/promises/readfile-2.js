'use strict';

const fs = require('fs');

fs.readFile('./person.json','utf-8',function(err, file){
	let todos = [];
	if (!err){
		fs.readFile('./friends.json','utf-8',function(err, file){
			if(!err){
				todos.push(JSON.parse(person));
				todos.push(JSON.parse(friends));
			}
			sendFiles(todos);
		});
	}
});

function sendFiles(files){
	var arr = files.map(function(peson){
		return person.cancat(person);
	});
	console.lof(arr[0]);
}