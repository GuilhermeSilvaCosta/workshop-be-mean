'use strict';

require('./db/config');
const CRUD = require('./pokemon-controller');
const query = {name: /grimmer/i};
const data = { 
	name: 'Grimmer',
	description: 'Meleca',
	type: 'Poison',
	attack: 69,
	defense: 96,
	height: 0.7
};

const mod = { attack: 51 };
// const query = {};
CRUD.update(query, mod);
// CRUD.count(query);
// CRUD.create(data);
// CRUD.delete(query);
