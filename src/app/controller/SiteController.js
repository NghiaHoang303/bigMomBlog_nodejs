const Course = require('../models/Course')


class SiteController {
  //[Get] /home
  index(req, res) {
    Course.find({}, function (err, courses) {
      if(!err) {
        res.json(courses);
      }else{
        err.status(400).json({error: 'ERROR'});
      }
    })

    // res.json({
    //   name: "test"
    // })
  }

  //[GET] /search
  // search(req, res) {
  //   res.render('search');
  // }
}

module.exports = new SiteController();
