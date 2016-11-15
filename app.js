var express = require('express');
var app = express();

app.use('/res', express.static('views')); // Set static path.

app.set('views', './views'); // Set views path.
app.set('view engine', 'pug'); // Set view engine.

app.get('/', function (req, res) { // Set root router.
  res.send('Hello World!');
});

var appRouter = express.Router(); // Set one router.

appRouter.get('/v1/test-api', function (req, res) {
  res.send({ ret: 1000 });
});

appRouter.get('/res/:id', function (req, res) {
  var id = req.params.id;
  var query_id = req.query.id;
  res.send(id);
});

appRouter.get('/home', function (req, res) {
  var title = req.query.title;
  res.render('home', { title: title, message: 'Hello there!'});
});

app.use('/base', appRouter); // Use router.

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
