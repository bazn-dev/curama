const TaskModel = require('./task.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getTasks = (data) => {
  TaskModel.find({}, (error, tasks) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got tasks`);
  });
};

module.exports.getTaskById = (socket, data) => {
  TaskModel.findOne({ _id: data._id }, (error, task) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got task by ${data._id}`);
  });
};

module.exports.addTask = (socket, data) => {
  data = JSON.parse(data);
  
  const task = new TaskModel(data);

  task.save(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added task`);
  });
};

module.exports.editTask = (socket, data) => {
  TaskModel.findOneAndUpdate({ _id: data._id }, data, (error, updatedTask) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated task ${data._id}`);
  });
};

module.exports.deleteTask = (socket, data) => {
  TaskModel.deleteOne({ _id: data._id }).exec(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted task ${data._id}`);
  });
};
