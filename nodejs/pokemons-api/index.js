'use strict';

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/file/:name', function(req, res, next){
	return SendFiles(req, res);
});

app.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});