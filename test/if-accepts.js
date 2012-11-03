var ifAccepts = require('../')
  , express = require('express')
  , request = require('supertest');

describe('if-accepts', function () {
  it('should hit the middleware', function (done) {
    var router = express();

    router.get('/test', ifAccepts('json', function (req, res) {
      res.json({test: true});
    }));

    request(router)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should miss the middleware', function(done) {
    var router = express();

    router.get('/test', ifAccepts('json', function (req, res, next) {
      console.log('not here');
      res.json({test: true});
    }));

    router.get('/test', function (req, res) {
      res.send('OK');
    });

    request(router)
      .get('/test')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .end(done);
  });
})
