'use strict';

const fs = require('fs');
const logStream = fs.createWriteStream(__dirname+'/models.log', {'flags': 'a'});

function log(model, value, done){
	logStream.write(`${model} : ${value} : ${new Date()}\n`);
	done();
}

module.exports = log;