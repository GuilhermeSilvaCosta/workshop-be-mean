//callback.js
'use strict';
const error = require('./error');
module.exports = (err,data,res,page,maxPages) => {
  if (err) error(err,res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};