const services = require("./develper.service");
const {methods} = require("./developer.config.json");

function connect(socket, methods) {
  for (let i = 0; i < Object.keys[methods].length; i++) {
    socket.on(methods[i], data => {
    
      // socket.emit('getTasks', {
      //   status: 200,
      //   statusMessage: `Got tasks`,
      //   data: tasks
      // });
  
      // socket.emit('getTaskById', {
      //   status: 200,
      //   statusMessage: `Got task by ${data._id}`,
      //   data: task
      // });
  
      // socket.emit('addTask', {
      //   status: 200,
      //   statusMessage: `Added task`,
      //   message: 'success'
      // });
  
      // socket.emit('editTask', {
      //   status: 200,
      //   statusMessage: `Updated task ${data._id}`,
      //   data: updatedTask
      // });
  
      // socket.emit('deleteTask', {
      //   status: 200,
      //   statusMessage: `Deleted task ${data._id}`,
      //   data: 'success'
      // });
      
      socket.emit(methods[i], {
        status: 200,
        statusMessage: `Updated task ${data._id}`,
        data: services[methods[i]](data)
      });
    });
  }
}

module.exports.connection = function (socket) {
  connect(socket, methods);
};
