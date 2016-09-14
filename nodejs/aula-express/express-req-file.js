'use strict';

const fs = require('fs');
const util = require('util');
const express = require('express');
const formidable = require('formidable');
const app = express();

app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = 'public/images';

    form.parse(req, (err, fields, files) => {        
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload: \n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });
});

app.get('/', (req, res) => {
    res.set('content-type', 'text/html');
    fs.createReadStream('./index-file.html').pipe(res);
});

app.listen(3000);