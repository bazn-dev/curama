const express = require('express');
const app = express();
const AuthMiddlewares = require('./auth.middleware');

app.post('/register', AuthMiddlewares.register);
app.post('/login', AuthMiddlewares.login);

module.exports = app;

const middlewares = require('./auth.middleware');

module.exports = function (socket) {
  socket.on("register", data => middlewares.register(socket, data));
  socket.on("login", data => middlewares.login(socket, data));
};
