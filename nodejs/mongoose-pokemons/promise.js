'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const _schema = {
	name: String,
	description: String,
	type: String,
	attack: Number,
	defense: Number,
	height: Number
};

// Criação do Schema
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const pokemon = {
	name: 'Jose',
	type: 'Fire',
	attack: 50,
	defence: 89,
	height: 1.82,
	description: 'jiujitero'
};

let promise = PokemonModel.find({}).exec();
promise.then(success, error);

// PokemonModel.create(pokemon).then(success, error);

function success(data){
	consolo.log(data);
}

function error(err){
	console.log(err);
}

module.exports = PokemonModel;