const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = {
	title: 'Primeiro POST',
	body: 'Post inicial do blog UEBAAAA',
	date: Date.now()
};

const comment = {
	title: 'Comentei aqui',
	body: 'Ta comentodado meu fiiii!',
	date: Date.Now()
};
const CommentsSchema = new Schema({
	title: String,
	body: String,
	date: Date
});

const BlogPostSchema = new Schema({
	title: String,
	body: String,
	comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);
BlogPost.save(function (err, data){
	if (err) return console.log('Erro: ', err);
	return console.log('Sucesso: ', data);
});