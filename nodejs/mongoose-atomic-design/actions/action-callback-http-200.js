module.exports = (err, data, res) => {
	if (err) return console.log('Err: ', err);

	res.writeHead(200, {'Content-Type': 'application/json'});
	return res.end(JSON.stringify(data));
}