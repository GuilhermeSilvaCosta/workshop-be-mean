'use strict'

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User(data){
	this.data = data;
	this.on('user:save', sendMail);
	this.on('error', sendError);
	EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

User.prototype.save = function(){
	if(this.data.name){
		this.emit('user:save',this.data);
	}else{
		this.emit('error', new TypeError('User need an name'));
	}
};

function sendMail(user){
	user.pass = Math.floor(Math.random() * (1000000 - 900000));
	util.log('Ola ' + user.name +'! bem vindo seu pass é '+user.pass+' você tem 24 horas para muda-loou tera que pedir reenvio');
}

function sendError(err){
	throw err;
}

module.exports = User;