const log = require('../scripts/logger');
const MicroserviceModel = require('../components/module/module.model').model;
const updateAPIMicroservices = require('../components/module/module.middleware').updateAPIMicroservices;

function connect(socket, io) {
  MicroserviceModel.find({}, (error, microservices) => {
    if (error) log.error(error);

    for (let i = 0; i < microservices.length; i++) {
      /*microservices[i].methods.forEach(method => {
        socket.on(method, data => {
          log.info(`${method} ${data.toString()}`);
          socket.broadcast.emit(method, data);
        });
      });*/
    }
  });
}

function updateAPI(socket) {
  socket.on('updateAPI', data => {
    if (data && data.data) {
      updateAPIMicroservices(null, data.data);
    }

    socket.broadcast.emit('updateAPI', data);
  });
}

module.exports.connection = async function (socket, io) {
  await connect(socket, io);
  updateAPI(socket);
};
