'use strict';

var Calc = require('./ex_01_mocha');
var assert = require('assert');

describe("Calc", () => {

	describe("Calc sum of two number", () => {
		it("the function sum return sum of two number", () => {
			const sum = Calc.sum(5,5);
			assert.equal(10, sum);
			assert.deepEqual(10, sum);
			assert.deepStrictEqual(10, sum);
		});
	});

	describe("Calc sub of two number", () => {
		it("the function sub return sum of two number", () => {
			const sub = Calc.sub(5,5);
			assert.equal(0, sub);
			assert.deepEqual(0, sub);
			assert.deepStrictEqual(0, sub);
		});
	});

});