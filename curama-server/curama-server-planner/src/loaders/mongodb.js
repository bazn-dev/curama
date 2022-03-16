const mongoose = require('mongoose');
const config = require('../config/config.json');

module.exports.mongooseLoader = async function() {
  mongoose.connect(`${config.dataBase.host}`, { useNewUrlParser: true });
  mongoose.set('debug', true);
};