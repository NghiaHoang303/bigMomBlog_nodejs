const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 800 },
    image: {type: String},
    slug: { type: String},
    level: { type: String},
    videoId: { type: String},   
    slug: { type: String, slug: "name", unique: true },
  }, {
    timestamps: true,
  });

  Course.plugin(mongooseDelete , {
    deletedAt : true,
    overrideMethods: 'all' });

  module.exports = mongoose.model('Course', Course)