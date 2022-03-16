const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  name: String,
  port: Number,
  components: Array,
  database: Map
});

module.exports = {
  model: mongoose.model('Module', moduleSchema),
  schema: moduleSchema
};
