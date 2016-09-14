'use strict'

const express = require('express');
const app = express();
const UserModel = require('./organism');

app.get('/user/:nome/:email/:cpf', (req, res) => {
  const nome = req.params.nome;
  const email = req.params.email;
  const cpf = req.params.cpf;

  const user = {"Nome": nome, "Email":email, "CPF":cpf };
  UserModel.create(res, user);

});


app.listen(3000, () => {
  console.log("Servidor sendo executado na porta 3000");
});