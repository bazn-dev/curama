module.exports.loaders = async function({ expressApp }) {
  await require('./express').expressLoader(expressApp);
  await require('./mongodb').mongooseLoader();
  await require('./socket-io').socketIOLoader();
};