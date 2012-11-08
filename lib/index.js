module.exports = function(contentType, middleware) {
  var accepts = [contentType, 'html'];

  return function(req, res, next) {
    var primaryAccepted = req.accepted[0];

    if (primaryAccepted.value === contentType || primaryAccepted.subtype === contentType)
      middleware.apply(this, arguments);
    else
      next();
  }
}
