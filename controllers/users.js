const bcrypt = require('bcrypt');
const User = require('../models/user');
const NotFoundErr = require('../errors/not-found-err');
const ConflictingRequest = require('../errors/conflicting-request');

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  User.findOne({ email })
    .then((data) => {
      if (data) {
        throw new ConflictingRequest('Пользователь с таким E-mail уже существует.');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      email,
      name,
      password: hash,
    }))
    .then((data) => { res.send({ email: data.email, name: data.name }); })
    .catch(next);
};
const getUser = (req, res, next) => {
  User.findById(req.param.id)
    .orFail(() => { throw new NotFoundErr('Нет пользователя с таким id'); })
    .then((data) => { res.send(data); })
    .catch(next);
};
const updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    {
      name,
      email,
    },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => { throw new NotFoundErr('Нет пользователя с таким id'); })
    .then((data) => { res.send(data); })
    .catch(next);
};

module.exports = {
  createUser,
  getUser,
  updateUserInfo,
};
