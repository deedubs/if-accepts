var path = !process.env.IF_ACCEPTS_COV
    ? './lib/'
    : './lib-cov/';

module.exports = require(path);
