const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
  //[Get] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(course => res.render('me/stored-courses' , {
        course: multipleMongooseToObject(course)
      }))
      .catch(next)
  }
}

module.exports = new MeController();
