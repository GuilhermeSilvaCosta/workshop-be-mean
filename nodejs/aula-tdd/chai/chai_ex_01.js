'use strict';

function Calc() {
	return {
		sum : sum,
		sub : sub
	};

	function sum(a, b) {
		return a + b;
	}

	function sub(a,b) {
		return a - b;		
	}
}

module.exports = Calc();