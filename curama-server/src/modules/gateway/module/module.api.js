const modules = require('./module.middleware');

module.exports = function (socket) {
  socket.on('getModules', async data => {
    socket.emit('getModules', {
      status: 200,
      statusMessage: `Got modules`,
      data: await modules.getModules(data)
    });
  });
  socket.on('addModule', async data => {
    socket.emit('addModule', {
      status: 200,
      statusMessage: `Added module`,
      data: await modules.addModule(data)
    });
  });
  socket.on('editModule', async data => {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    socket.emit('editModule', {
      status: 200,
      statusMessage: `Updated module ${data._id}`,
      data: await modules.editModule(data)
    });
  });
  socket.on('deleteModule', async data => {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    socket.emit('deleteModule', {
      status: 200,
      statusMessage: `Deleted module ${data._id}`,
      data: await modules.deleteModule(data)
    });
  });
};
