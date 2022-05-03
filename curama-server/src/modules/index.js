const developer = require('./developer');

module.exports.connection = (socket, io) => {
  developer.connection(socket);
};
