module.exports = function(Schema, ModelNome){
	const mongoose = require('mongoose');
	return mongoose.model(ModelNome, Schema);
}