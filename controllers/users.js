const User = require('../models/user');
const NotFoundErr = require('../errors/not-found-err');

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
  getUser,
  updateUserInfo,
};
