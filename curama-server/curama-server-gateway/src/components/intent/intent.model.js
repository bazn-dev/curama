const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intentSchema = new Schema({
  name: String,
  examples: Array,
  response: String
});

module.exports = {
  model: mongoose.model('Intent', intentSchema),
  schema: intentSchema
};