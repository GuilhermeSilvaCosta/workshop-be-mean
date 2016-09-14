'use strict';

const express = require('express');
const app = express();
const router = express.Router();

//Cria o modulo de roteamento
router.use((req, res, next) => {
    res.send('Hello World');
    next();
});

// Passa o módulo para a URL /Hello
app.use('/hello', router);

app.listen(3000, () => {
    console.log('Servidor rodando em localhost:3000');
});