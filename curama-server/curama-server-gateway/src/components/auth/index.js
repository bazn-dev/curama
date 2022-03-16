module.exports.connection = function (socket) {
  require('./auth.api')(socket);
};
