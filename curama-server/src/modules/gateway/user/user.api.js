const middlewares = require('./user.middleware');

module.exports = function (socket) {
  socket.on("getUsers", data => middlewares.getUsers(socket, data));
  socket.on("addUser", data => middlewares.addUser(socket, data));
  socket.on("editUser", data => middlewares.editUser(socket, data));
  socket.on("deleteUser", data => middlewares.deleteUser(socket, data));
};