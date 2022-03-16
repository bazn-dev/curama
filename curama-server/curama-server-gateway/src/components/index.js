const jwt = require('express-jwt');
const auth = require('./auth');
const user = require('./user');
const microservice = require('./module');
const intent = require('./intent');

module.exports.connection = function (socket, io) {
  user.connection(socket);
  microservice.connection(socket);
  intent.connection(socket);
};
