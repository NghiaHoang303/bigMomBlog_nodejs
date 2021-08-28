const newRouter = require('./news');
const siteRouter = require('./site');
const searchRouter = require('./search');

function route(app) {
  app.get('/news', newRouter);

  app.get('/search', searchRouter);

  app.get('/', siteRouter);
}

module.exports = route;
