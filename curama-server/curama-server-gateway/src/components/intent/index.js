module.exports.connection = function (socket) {
  require('./intent.api')(socket);
};