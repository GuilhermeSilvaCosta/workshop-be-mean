'use strict';

const fs = require('fs');

fs.readFile('./person.json','utf-8',function(err, file){
	if(!err) console.log(file);
	else throw err
});