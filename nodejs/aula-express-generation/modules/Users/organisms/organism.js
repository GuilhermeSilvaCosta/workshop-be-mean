'use strict';

const UserSchema = require('../molecules/molecule');
const User = require('../../../modules/model')('User',UserSchema);

//actions
const create = require('../actions/action-create')(User);
const find = require('../actions/action-find')(User);
const findOne = require('../actions/action-findOne')(User);
const remove = require('../actions/action-remove')(User);
const update = require('../actions/action-update')(User);

const CRUD = {
  create
  , find
  , findOne
  , update
  , remove
};

module.exports = CRUD;