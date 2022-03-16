const GroupLinkModel = require('./groupLink.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getGroupLinks = (socket, data) => {
  GroupLinkModel.find({}, (error, groupLinks) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got groupLinks`);

    socket.emit('getGroupLinks', {
      status: 200,
      statusMessage: `Got groupLinks`,
      data: groupLinks
    });
  });
};

module.exports.getGroupLinkById = (socket, data) => {
  GroupLinkModel.findOne({ _id: data._id }, (error, groupLink) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got groupLink by ${data._id}`);

    socket.emit('getGroupLinkById', {
      status: 200,
      statusMessage: `Got groupLink by ${data._id}`,
      data: groupLink
    });
  });
};

module.exports.addGroupLink = (socket, data) => {
  data = JSON.parse(data);
  
  const groupLink = new GroupLinkModel(data);

  groupLink.save(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added groupLink`);

    socket.emit('addGroupLink', {
      status: 200,
      statusMessage: `Added groupLink`,
      message: 'success'
    });
  });
};

module.exports.editGroupLink = (socket, data) => {
  GroupLinkModel.findOneAndUpdate({ _id: data._id }, data, (error, updatedGroupLink) => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated groupLink ${data._id}`);

    socket.emit('editGroupLink', {
      status: 200,
      statusMessage: `Updated groupLink ${data._id}`,
      data: updatedGroupLink
    });
  });
};

module.exports.deleteGroupLink = (socket, data) => {
  GroupLinkModel.deleteOne({ _id: data._id }).exec(error => {
    if (error) console.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted groupLink ${data._id}`);

    socket.emit('deleteGroupLink', {
      status: 200,
      statusMessage: `Deleted groupLink ${data._id}`,
      data: 'success'
    });
  });
};