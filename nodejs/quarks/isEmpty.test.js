'use strict';

const value = 'A';

const validate = require('./isEmpty')(value);

console.log('is empty?', validate);