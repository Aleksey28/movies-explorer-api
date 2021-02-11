const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
const usersRouter = require('./users');
const movieRouter = require('./movies');
const { createUser, login, logout } = require('../controllers/users');
const checkPassword = require('../middlewares/check-password');
const auth = require('../middlewares/auth');
const NotFoundErr = require('../errors/not-found-err');
const { validateAuthentication, validateUserCreate } = require('../middlewares/validations');

router.post('/signup', validateUserCreate, checkPassword, createUser);
router.post('/signin', validateAuthentication, checkPassword, login);
router.post('/signout', logout);

router.use('/users', auth, usersRouter);
router.use('/movies', auth, movieRouter);

router.all('/*', () => {
  throw new NotFoundErr('Запрашиваемый ресурс не найден');
});

module.exports = router;
