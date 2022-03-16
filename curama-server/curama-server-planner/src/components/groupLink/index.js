const methods = require('./groupLink.config').methods;
const middlewares = require('./groupLink.middleware');

function connect(socket, methods) {
  for (let i = 0; i < methods.length; i++) {
    socket.on(methods[i], data => middlewares[methods[i]](socket, data));
  }
}

module.exports.connection = function (socket) {
  connect(socket, methods);
};