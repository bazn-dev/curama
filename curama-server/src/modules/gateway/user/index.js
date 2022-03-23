module.exports.connection = function (socket) {
  require('./user.api')(socket);
};