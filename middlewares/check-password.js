const BadRequest = require('../errors/bad-request');

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || !password.trim() || password.trim().length < 8) {
    throw new BadRequest('Минимальная длинная поля "password" - 8');
  } else {
    next();
  }
};

module.exports = checkPassword;
