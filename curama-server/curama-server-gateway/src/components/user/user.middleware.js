const UserModel = require('./user.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getUsers = (socket, data) => {
  UserModel.find({}, (error, users) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got users`);

    socket.emit('getUsers', {
      status: 200,
      statusMessage: `Got users`,
      data: users
    });
  });
};

module.exports.getUserById = (socket, data) => {
  UserModel.findOne({_id: data._id}, (error, user) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got user by ${data._id}`);

    socket.emit('getUserById', {
      status: 200,
      statusMessage: `Got user by ${data._id}`,
      data: user
    });
  });
};

module.exports.addUser = (socket, data) => {
  data = JSON.parse(data);

  const user = new UserModel(data);

  user.save(error => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added user`);

    socket.emit('addUser', {
      status: 200,
      statusMessage: `Added user`,
      message: 'success'
    });
  });
};

module.exports.editUser = (socket, data) => {
  UserModel.findOneAndUpdate({_id: data._id}, data, (error, updatedUser) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated user ${data._id}`);

    socket.emit('editUser', {
      status: 200,
      statusMessage: `Updated user ${data.id}`,
      data: updatedUser
    });
  });
};

module.exports.deleteUser = (socket, data) => {
  UserModel.deleteOne({_id: data._id}).exec(error => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted user ${data._id}`);

    socket.emit('deleteUser', {
      status: 200,
      statusMessage: `Deleted user ${data._id}`,
      data: 'success'
    });
  });
};