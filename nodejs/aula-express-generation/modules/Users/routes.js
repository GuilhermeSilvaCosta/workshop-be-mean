'use strict';

const express = require('express');
const router = express.Router();
const UserModel = require('../Users/organisms/organism');


router.post('/', function(req, res) {
  const body = req.body;
  UserModel.create(res, body);
});

router.get('/find', (req,res,next) =>{
  const page = 1;
  const q = req.query.q;
  const query = q ? {email: q} : {};
  UserModel.find(res, query, page);
});

router.get('/:id', (req,res) =>{
  const id = req.params.id;
  const query = id ? {"_id": id} : {};
  UserModel.findOne(res, query);    
});

router.put('/:id', (req,res) => {
  const multi = false;
  const id = req.params.id;
  const body = req.body;
  UserModel.update(res,{"_id": id}, body, multi);
});

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  UserModel.remove(res,{"_id": id});
});

module.exports = router;
