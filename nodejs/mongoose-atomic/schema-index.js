const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/teste');
var userSchema = new Schema({
	name: String,
	email: String,
	created_at: { type: String, default: Date.now, index: true }
});

userSchema.index({ name: 1, type: -1 });

const User = mongoose.model('Usuario', userSchema);

const _user = {
	name: 'Segundo Usuário',
	email: 'guilherme@webschool.io'
};

User.create(_user, (err, data) => {
	if (err) return console.log('Error: ', err);
	return console.log('Inseriu', data)
});