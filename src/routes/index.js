const newRouter = require('./news');
const siteRouter = require('./site');
const searchRouter = require('./search');
const courseRouter = require('./courses');
const meRouter = require('./me')

function route(app) {
  app.use('/news', newRouter);

  app.use('/search', searchRouter);

  app.use('/me' , meRouter );

  app.use('/courses', courseRouter);

  app.use('/', siteRouter);
}

module.exports = route;
