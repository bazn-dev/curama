const IntentModel = require('./intent.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.getIntents = async data => {
  return await IntentModel.find({}, (error, intents) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got intents`);
  }).exec();
};

module.exports.getIntentById = async data => {
  return await IntentModel.findOne({_id: data._id}, (error, intent) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Got intent by ${data._id}`);
  }).exec();
};

module.exports.addIntent = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  const intent = new IntentModel(data);

  await intent.save(error => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Added intent`);
  });

  return intent;
};

module.exports.editIntent = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  return await IntentModel.findOneAndUpdate({_id: data._id}, data, {new: true}, (error, updatedIntent) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Updated intent ${data._id}`);
  }).exec();
};

module.exports.deleteIntent = async data => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  return await IntentModel.findOneAndDelete({_id: data._id}, (error, intent) => {
    if (error) log.error(error);

    log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Deleted intent ${data._id}`);
  }).exec();
};
