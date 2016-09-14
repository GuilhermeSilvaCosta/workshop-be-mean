'use strict';

const expect = require('chai').expect;
const ctrl = require('./pokemon-controller');

describe('Controller of Pokemons', () => {
    const pokemon = {
        name : 'Jean',
        description : 'Pokemonzudo S2',
        type : 'Fire',
        attack : 85,
        defense : 85,
        height : 1.80
    };

    // after(done => {
    //     ctrl.delete({}, () => {
    //         done();
    //     });
    // });

    describe('create a new pokemon', () => {
        it('expect a new pokemon has created', done => {
            ctrl.create(pokemon, (err, data) => {
                /*jshint expr: true*/
                expect(err).to.not.exist;
                expect(data._id).to.exist;
                expect(data.height).to.be.eq(1.8);
                expect(data.defense).to.be.eq(85);
                expect(data.attack).to.be.eq(85);
                expect(data.type).to.be.eq('Fire');
                expect(data.description).to.be.eq('Pokemonzudo S2');
                expect(data.name).to.be.eq('Jean');
                done();
            });
        });
    });

    describe('Find all Pokemon', () => {
        it('expect get all pokemon in db', done => {
            ctrl.retrieve({}, (err, data) => {
                /*jshint expr: true*/
                expect(err).to.not.exist;
                expect(data).to.be.an('array');
                expect(data).to.have.length.above(0);
                done();                
            });
        });
    });

    describe('Update a pokemon', () => {
        it('expect update a pokemon ', done => { 
            const query = {name: 'Jean'};           
            const mod = {attack: 82, defense: 27};
            const options = {};  
            ctrl.update(query, mod, options, (err,data) => {  
                expect(err).to.not.exist;  
                expect(data.nModified).to.be.eq(1);
                expect(data.ok).to.be.eq(1);
                done();  
            });  
        });  
    });

    describe('Delete a pokemon', () => {
        it('expect delete a pokemon', done => {
            const query = {name: 'Jean'};
            ctrl.delete(query, (err, data) => {
                expect(err).to.not.exist;  
                expect(data.result.ok).to.be.eq(1);
                done();
            });
        });
    });
});