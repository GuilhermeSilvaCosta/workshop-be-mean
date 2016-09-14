'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const log = require('./log');

const name = require('./fields/fields-name');
const description = require('./fields/fields-description');
const type = require('./fields/fields-description');
const attack = require('./fields/fields-attack');
const defense = require('./fields/fields-defense');
const height = require('./fields/fields-height');
const created_at = require('./fields/fields-created_at');

const _schema = {
	name,
	description,
	type,
	attack,
	defense,
	height,
	created_at
};

const schema = new Schema(_schema);

schema.pre('count', function(next){
	console.log('pre count!');
	// console.log(this);
	//console.log(this.schema.s);
	next();
});

schema.post('count', function(data){
	console.log('post count!');
	// console.log(this);
	//console.log(this.schema.s);
	//console.log(data);
});

schema.pre('save', function(next){
	console.log('bafore save');
	next();
});

// schema.pre('save', true, function(next, done){
// 	console.log('before save');
// 	log('model', `${this.name} ${this._id} has been saved`, done);
// 	next();
// });


schema.post('save', function (data){
	console.log('%s has been saved', data.name);
});

schema.pre('validate', function(next){
	console.log('before validate');
	next();
});

schema.post('validate', function(data){
	console.log('%s has been valid', data.name);
});

schema.pre('update', function(){
	this.start = Date.now();
	this.update({},{$set: {updateAt: new Date()}});
});

// schema.pre('remove', function(next){
// 	console.log('Antes de remover');
// 	next();
// });

module.exports = schema;