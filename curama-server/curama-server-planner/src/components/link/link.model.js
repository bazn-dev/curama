const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  "title": "String",
  "url": "String",
  "description": "String",
  "createdDate": "Date"
});

module.exports = {
  model: mongoose.model('Link', linkSchema),
  schema: linkSchema
};