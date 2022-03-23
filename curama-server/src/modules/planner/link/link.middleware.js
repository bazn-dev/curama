const LinkModel = require('./link.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getLinks = (socket, data) => {
  LinkModel.find({}, (error, links) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got links`);

    socket.emit('getLinks', {
      status: 200,
      statusMessage: `Got links`,
      data: links
    });
  });
};

module.exports.getLinkById = (socket, data) => {
  LinkModel.findOne({_id: data._id}, (error, link) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got link by ${data._id}`);

    socket.emit('getLinkById', {
      status: 200,
      statusMessage: `Got link by ${data._id}`,
      data: link
    });
  });
};

module.exports.addLink = (socket, data) => {
  data = JSON.parse(data);

  const link = new LinkModel(data);

  link.save(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added link`);

    socket.emit('addLink', {
      status: 200,
      statusMessage: `Added link`,
      message: 'success'
    });
  });
};

module.exports.editLink = (socket, data) => {
  LinkModel.findOneAndUpdate({_id: data._id}, data, (error, updatedLink) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated link ${data._id}`);

    socket.emit('editLink', {
      status: 200,
      statusMessage: `Updated link ${data._id}`,
      data: updatedLink
    });
  });
};

module.exports.deleteLink = (socket, data) => {
  LinkModel.deleteOne({_id: data._id}).exec(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted link ${data._id}`);

    socket.emit('deleteLink', {
      status: 200,
      statusMessage: `Deleted link ${data._id}`,
      data: 'success'
    });
  });
};