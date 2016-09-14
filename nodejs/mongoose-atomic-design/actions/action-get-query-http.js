module.exports = (_url) => {
	const url_parts = url.parse(_url);
	return querystring.parse(url_parts.query)
};