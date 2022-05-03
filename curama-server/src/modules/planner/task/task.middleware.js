const TaskModel = require('../../developer/task.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getTasks = (socket, data) => {
  TaskModel.find({}, (error, tasks) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got tasks`);

    socket.emit('getTasks', {
      status: 200,
      statusMessage: `Got tasks`,
      data: tasks
    });
  });
};

module.exports.getTaskById = (socket, data) => {
  TaskModel.findOne({ _id: data._id }, (error, task) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got task by ${data._id}`);

    socket.emit('getTaskById', {
      status: 200,
      statusMessage: `Got task by ${data._id}`,
      data: task
    });
  });
};

module.exports.addTask = (socket, data) => {
  data = JSON.parse(data);
  
  const task = new TaskModel(data);

  task.save(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added task`);

    socket.emit('addTask', {
      status: 200,
      statusMessage: `Added task`,
      message: 'success'
    });
  });
};

module.exports.editTask = (socket, data) => {
  TaskModel.findOneAndUpdate({ _id: data._id }, data, (error, updatedTask) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated task ${data._id}`);

    socket.emit('editTask', {
      status: 200,
      statusMessage: `Updated task ${data._id}`,
      data: updatedTask
    });
  });
};

module.exports.deleteTask = (socket, data) => {
  TaskModel.deleteOne({ _id: data._id }).exec(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted task ${data._id}`);

    socket.emit('deleteTask', {
      status: 200,
      statusMessage: `Deleted task ${data._id}`,
      data: 'success'
    });
  });
};
