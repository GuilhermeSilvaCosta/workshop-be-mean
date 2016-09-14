const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
	name: {
		first: String,
		last: String
	}
});

PersonSchema
.virtual('name.full')
.get(function(){
	return this.name.first + ' ' this.name.last;
});

const Person = mongoose.model('Person', PersonSchema);

const Suissao = new Person({
	name: { first: 'Jean', last: 'Suissa' }
});

const post_id = 'xxx';
Person.findById(post_id, function(err, data){
	if (err) return console.log('Erro', err);
	return console.log('Nome Completo: ', data.name.full);
});