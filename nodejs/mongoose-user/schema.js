'use strict'
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const userSchema = new Schema({
	name: require('./fields/field-name'),
	password: require('./fields/field-password'),
	email: require('./fields/field-email'),
	type: require('./fields/field-type'),
	created_at: require('./fields/field-created_at')
});

userSchema.methods.cryptoPassword = function(){
	const key = crypto.pbkdf2Sync(this.password, 'salt', 100000, 256, 'sha256');
	return key.toString('hex');
};

userSchema.pre('save', function(next){
	console.log('sem criptografia: ' + `${this.password}` );
	this.password = this.cryptoPassword();
	next();
});

module.exports = userSchema;