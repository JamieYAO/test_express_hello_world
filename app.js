var express = require('express');
var app = express();

app.use('/res', express.static('views'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var appRouter = express.Router();

appRouter.get('/v1/test-api', function (req, res) {
  res.send({ ret: 1000 });
});

appRouter.get('/res/:id', function (req, res) {
  var id = req.params.id;
  var query_id = req.query.id;
  res.send(id);
});

appRouter.get('/home', function (req, res) {
  res.render('home', { title: 'Hey', message: 'Hello there!'});
});

app.use('/base', appRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
