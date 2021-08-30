const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {

  //[Get] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find()

    if(req.query.hasOwnProperty('_sort')){
      // res.json({massage: 'success'})
      // return
      courseQuery = courseQuery.sort({
        [req.query.column] : req.query.type,
      })
    }

    Promise.all([courseQuery, Course.countDocumentsDeleted()])
        .then(([course, deletedCount])=> 
            res.render('me/stored-courses', {
            deletedCount,
            course: multipleMongooseToObject(course)

          })
        ) 
    // Course.find()
    //   .then(course => res.render('me/stored-courses' , {
    //     course: multipleMongooseToObject(course)
    //   }))
    //   .catch(next)
  }

 //[Get] /me/trash/courses
 trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(course => res.render('me/trash-courses' , {
        course: multipleMongooseToObject(course)
      }))
      .catch(next)
  }
}

module.exports = new MeController();
