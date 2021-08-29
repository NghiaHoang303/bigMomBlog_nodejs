var path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
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
app.use(methodOverride('_method'))

  app.use(express.static(path.join(__dirname, 'public')));
  console.log(__dirname);

// app.use(morgan('combined'));

// template engines
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    helpers: { 
      sum: (a,b) => a + b 
    }
  }),
);
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'resources','views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
