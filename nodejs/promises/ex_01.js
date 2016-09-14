'use strict';

const readFile = require('./fs-promise');

readFile('./person.json').then(sucess, error);

function sucess(data){
	console.log(data);
}

function error(err){
	console.error(err);
}