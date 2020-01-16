var express = require('express');
var app = express();



app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
  };
  res.render('index', data);
});

  app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
  
  app.listen(3000);