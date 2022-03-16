const config = require('../config/config');

module.exports.socketIOLoader = async function () {
  const socket = require('socket.io-client')(config.gatewayUrl);

  require('../components').connection(socket);
};
