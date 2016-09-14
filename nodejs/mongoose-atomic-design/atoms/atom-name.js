const Atom = {
	type: String,
	get: require('./../quarks/quark-toUpper'),
	set: require('./../quarks/quark-toLower'),
	validate: require('./../quarks/quark-validate-string-GTE3'),
	required: true,
	index: true
};
module.exports = Atom;