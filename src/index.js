var path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

db.connect();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

  app.use(express.static(path.join(__dirname, 'public')));
  console.log(__dirname);

// app.use(morgan('combined'));

// template engines
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
  }),
);
  app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
