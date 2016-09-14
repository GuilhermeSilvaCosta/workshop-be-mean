'use strict';

const mongoose = require('mongoose');
const email = require('../atoms/atom-email');
const password = require('../atoms/atom-password');
const created_at = require('../atoms/atom-created_at');

const _schema = {
  email
  , password
  , created_at
}

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;