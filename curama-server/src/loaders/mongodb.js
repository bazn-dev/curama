const mongoose = require('mongoose');
const config = require('../config/config.json');

module.exports.mongooseLoader = async function() {
  await mongoose.connect(config.dataBase.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.set('debug', true);
};
