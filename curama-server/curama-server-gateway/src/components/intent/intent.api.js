const middlewares = require('./intent.middleware');
const nlu = require('../../scripts/nlu');

module.exports = function (socket) {
  socket.on('getIntents', async data => {
    nlu.nlu();

    socket.emit('getIntents', {
      status: 200,
      statusMessage: `Got intents`,
      data: await middlewares.getIntents(data)
    });
  });
  socket.on('addIntent', async data => {
    socket.emit('addIntent', {
      status: 200,
      statusMessage: `Added intent`,
      data: await middlewares.addIntent(data)
    });
  });
  socket.on('editIntent', async data => {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    socket.emit('editIntent', {
      status: 200,
      statusMessage: `Updated intent ${data._id}`,
      data: await middlewares.editIntent(data)
    });
  });
  socket.on('deleteIntent', async data => {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    socket.emit('deleteIntent', {
      status: 200,
      statusMessage: `Deleted intent ${data._id}`,
      data: await middlewares.deleteIntent(data)
    });
  });
};