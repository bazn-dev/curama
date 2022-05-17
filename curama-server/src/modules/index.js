const root = require('./root')
const developer = require('./developer')

module.exports.connection = (socket, io) => {
  root.connection(socket)
  // developer.connection(socket)
};
