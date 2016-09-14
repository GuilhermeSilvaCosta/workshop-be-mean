'user strict';

const slice = Array.prototype.slice;
function add() {
	const args = arguments;
	const arr = Array.isArray(args[0]) ? args[0]: slice.call(arguments,0);
	return arr.reduce(addArr,0);
}


function addArr(a, b) {
	return a+=b;
}

module.exports = add;