'use strict'

const Molecule = require('./molecule');
const Organism = require('./model')(Molecule, 'Pokemons');
const callback = require('./callback');

const find = (res, query, page) => {
        Organism.count({}, (err, count) => {
            const maxPages = Math.ceil(count/3);
            Organism.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(3).skip(3 * (page - 1));
        });
};

const CRUD = {
    find 
}
module.exports = CRUD;