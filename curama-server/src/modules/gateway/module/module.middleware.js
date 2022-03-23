const ModuleModel = require('./module.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getModules = async data => {
  return await ModuleModel.find({}, (error, modules) => {
    if (error) log.error(error);
    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got modules`);
  }).exec();
};

module.exports.getModuleById = async data => {
  return await ModuleModel.findOne({_id: data._id}, (error, module) => {
    if (error) log.error(error);
    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got module by ${data._id}`);
  }).exec();
};

module.exports.addModule = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  const module = new ModuleModel(data);
  await module.save(error => {
    if (error) log.error(error);
    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added module`);
  });
  return module;
};

module.exports.editModule = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  return await ModuleModel.findOneAndUpdate({_id: data._id}, data, {new: true}, (error, updatedModule) => {
    if (error) log.error(error);
    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated module ${data._id}`);
  }).exec();
};

module.exports.deleteModule = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  return await ModuleModel.findOneAndDelete({_id: data._id}, (error, module) => {
    if (error) log.error(error);
    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted module ${data._id}`);
  }).exec();
};

module.exports.updateAPIModules = (socket, data) => {
  ModuleModel.findOne({name: data.name}, (error, module) => {
    if (error) log.error(error);

    if (module) {
      ModuleModel.findOneAndUpdate({name: data.name}, data, (error, updatedModule) => {
        if (error) log.error(error);

        log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated module ${updatedModule._id}`);

        if (socket) {
          socket.emit('updateAPI', {
            status: 200,
            statusMessage: `Update module by ${updatedModule._id}`,
            data: updatedModule
          });
        }
      });
    } else {
      const module = new ModuleModel(data);

      module.save(error => {
        if (error) log.error(error);

        log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added module ${module._id}`);

        if (socket) {
          socket.emit('updateAPI', {
            status: 200,
            statusMessage: `Add module`,
            data: module
          });
        }
      });
    }
  });
};
