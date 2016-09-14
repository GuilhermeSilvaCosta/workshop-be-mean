'use strict'

require("./db-config");
const UserSchema = require('./molecule');
const UserModel = require('./model')(UserSchema,'User');
const xml = require('xml');

const callback = (err, data, res, type) => {
    if (err) return res.status(400).send(err);
    if (/text\/xml/i.test(type)){
        let xmlUsers = xml({user: [{nome: data[0].name},{email: data[0].email},{cpf: data[0].cpf} ]});
        res.set('Content-Type', 'application/xml');
        res.send(xmlUsers);
    }else {
        res.json(data);
    }
};

const CRUD = {
    create : (res, user) => {
        UserModel.create(user, (err, data) => callback(err, data, res));
    },
    retrive : (res, query, type) => {
        UserModel.find(query, (err,data) => callback(err, data, res, type));
    }  
}

module.exports = CRUD;