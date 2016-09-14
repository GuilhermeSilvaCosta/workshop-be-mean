'use strict'

var Calc = require('./chai_ex_01');
var expect = require('chai').expect;

describe('Calc', () => {
    describe('Calc sum of two number', () => {
        it('the function sum return sum of two number', () => {
            const sum = Calc.sum(5,5);
            expect(sum).to.be.a('number');
            expect(sum).to.equal(10);
            expect(Calc).to.have.property('sum');
        });
    });

    describe('Calc sub of two number', () => {
        it('the function sub return sub of two number', () => {
            const sub = Calc.sub(5,5);
            expect(sub).to.equal(0);
            expect(sub).to.be.a('number');
            expect(Calc).to.have.property('sub');
        });
    });
});