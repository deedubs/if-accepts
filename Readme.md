# if-accepts [![Build Status](https://secure.travis-ci.org/deedubs/if-accepts.png)](http://travis-ci.org/deedubs/if-accepts)

## Example

````javascript
router.use('/myPath', ifAccepts('json', require('another-express-router')));

````

## Spec
# TOC
   - [if-accepts](#if-accepts)
<a name="" />

<a name="if-accepts" />
# if-accepts
should hit the middleware.

```js
var router = express();

router.get('/test', ifAccepts('json', function (req, res) {
  res.json({test: true});
}));

request(router)
  .get('/test')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .end(done);
```

should miss the middleware.

```js
var router = express();

router.get('/test', ifAccepts('json', function (req, res, next) {
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
```

