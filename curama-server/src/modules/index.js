const developer = require('./developer');

module.exports.connection = function (socket, io) {
  developer.connection(socket);
};
