'use strict';

const User = require('./user');
const user = new User({name: 'Pompeu'});

user.save();

// const invalidUser = new User({cpf: '11122233344'});

// invalidUser.save();