function authHandler(req, res, next) {
  if(req.user && req.session.user) {
    return next();
  } else {
    res.render('error', {
      title : 'error',
      message : 'invalid user',
      error : {
        status : 401,
        stack  : 'uuthorized'
      }
    });
  }
}
module.exports = exports = authHandler;