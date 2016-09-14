const mongoose = require('mongoose');
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
const query = {name: /pikachu/i};
const mod = {attack: 666};

const options = { upsert: true, multi: true }

PokemonModel.update(query, mod, options, function(err, data){
	if (err) return console.log('ERRO: ', err);
	return console.log('Alterou: ', data);
});

module.exports = PokemonModel;