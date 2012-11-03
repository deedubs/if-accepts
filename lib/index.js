module.exports = function(contentType, middleware) {
  var accepts = [contentType, 'html'];

  return function(req, res, next) {
    if (req.accepts(accepts) == contentType)
      middleware.apply(this, arguments);
    else
      next();
  }
}