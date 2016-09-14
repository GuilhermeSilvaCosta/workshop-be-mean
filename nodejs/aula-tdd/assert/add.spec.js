'user strict';

const assert = require('assert');
const add = require('./add');

assert.equal(3, add(1,2));
assert.equal(5, add(1,2,2));
assert.equal(10, add(1,2,2,4,1));
assert.equal(10, add([1,2,2,4,1]),"deve retornar 10");