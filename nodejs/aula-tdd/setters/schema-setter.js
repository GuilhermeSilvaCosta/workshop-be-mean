'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let toLower = (v) => v.toLowerCase();

const UserSchema = new Schema({
    email: { type: String, set: toLower }
});

module.exports = mongoose.model('Users', UserSchema);