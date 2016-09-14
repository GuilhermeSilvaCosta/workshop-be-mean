const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String	
};

// Criação do Schema
const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const id = '576b4d70b647892fb6a0c973';

PokemonModel.findById(id, function(err, data){
	if (err) return console.log('ERRO: ', err);
	return console.log('Buscou: ', data);
});

module.exports = PokemonModel;