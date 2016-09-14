const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String,
	age: Number
};

// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
	name: {teste: 1},
	age: 'bazinga'
};

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function(err, data){
	if (err) return console.log('ERRO: ', err);
	console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;