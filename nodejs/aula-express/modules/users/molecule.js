'use strict';

const mongoose = require('mongoose');

const name = {type: String, required: true};
const email = {type: String, required: true};
const cpf = {type: String, required: true};
const password = {type: String};

const _schema = {
  name,
  email,
  cpf,
  password
}

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;