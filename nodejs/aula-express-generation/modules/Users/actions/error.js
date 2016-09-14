'use strict';
module.exports = (err,res) => {
  res.writeHead(404);
  return res.end(err.toString());
};