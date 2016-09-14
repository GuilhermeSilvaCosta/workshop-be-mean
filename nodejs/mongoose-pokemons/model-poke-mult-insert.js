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
const data = [
	{
		name: 'Dito',
		description: 'Amoeba que se transforma em qualquer pokemon',
		type: 'Normal'	
	},
	{
		name: 'Gengar',
		description: 'Pokemon assustador',
		type: 'Ghost'
	},
	{
		name: 'Mew',
		description: 'Pokemon lendário',
		type: 'Psychic'
	}
]

PokemonModel.create(data, function(err, data){
	if (err) return console.log('ERRO: ', err);
	return console.log('Inseriu varios pokemons: ', data);
});

module.exports = PokemonModel;