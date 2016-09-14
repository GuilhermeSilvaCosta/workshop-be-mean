const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
};

// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
	pokemons: ['576b506cb647892fb6a0c976', '576b4d70b647892fb6a0c973']
};

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function(err, data){
	if (err) return console.log('ERRO: ', err);
	console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;