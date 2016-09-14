'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
    res.setHeader('Webschool', 'FODA');
    console.log('all');
    next();
});

router.get('/', (req, res, next) => {
    require('./models/model-pokemon-list')(req, res);
});

module.exports = router;