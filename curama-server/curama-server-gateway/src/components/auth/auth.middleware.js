const passport = require('passport');
const UserModel = require('../user/user.model').model;
const moment = require('moment');
const log = require('../../scripts/logger');

module.exports.register = (socket, data) => {
  const { user } = data;

  if (!user.login) {
    return res.status(422).json({ errors: { login: 'is required' } });
  }

  if (!user.password) {
    return res.status(422).json({ errors: { password: 'is required' } });
  }

  const finalUser = new UserModel(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => {
      log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Register new user ${finalUser._id}`);
      res.json({ user: finalUser.toAuthJSON() })
    });
};

module.exports.login = (req, res, next) => {
  const { body: { user } } = req;

  if (!user.login) {
    return res.status(422).json({ errors: { login: 'is required' } });
  }

  if (!user.password) {
    return res.status(422).json({ errors: { password: 'is required' } });
  }

  return passport.authenticate('local', (err, passportUser, info) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - Success login user ${user._id}`);
      return res.json({ user: user.toAuthJSON() });
    }

    return res.status(400).json(info);
  })(req, res, next);
};
