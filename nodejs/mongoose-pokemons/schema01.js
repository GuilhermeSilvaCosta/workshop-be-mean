const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Criação do Schema
const pokemonSchema = new Schema({
	name: String,
	description: String,
	type: String,
	attack: String,
	defense: Number,
	height: Number	
});

module.exports = pokemonSchema;