const fs = require('fs');
const task = require('./task');
const link = require('./link');

function updateAPI (socket) {
  socket.on('updateAPI', data => {
    console.log('updateAPI - planner');
    const names = fs.readdirSync('./src/components').filter(name => name !== 'index.js');
    const components = [];

    for (let i = 0; i < names.length; i++) {
      components.push(require('./' + names[i] + '/' + names[i] + '.config.json'));
    }

    socket.emit('updateAPI', {
      status: 200,
      statusMessage: `Update microservices API`,
      data: {
        name: 'planner',
        components
      }
    });
  });
}

module.exports.connection = function (socket) {
  task.connection(socket);
  link.connection(socket);
  updateAPI(socket);
};