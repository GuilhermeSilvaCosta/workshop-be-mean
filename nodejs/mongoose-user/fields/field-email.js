const _set = (v) => v.toLowerCase();
const _validate = (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

const Field = {
	type: String,
	// get: _get,
	set: _set,
	validate: [_validate, 'Email ({VALUE}) invalido!'],
	required: false,
	index: true
};

module.exports = Field;