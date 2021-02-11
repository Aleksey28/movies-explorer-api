const router = require('express').Router();
const users = require('./users');
const movies = require('./movies');
const { createUser, login, logout } = require('../controllers/users');
const checkPassword = require('../middlewares/check-password');
const auth = require('../middlewares/auth');
const NotFoundErr = require('../errors/not-found-err');

router.post('/signup', checkPassword, createUser);
router.post('/signin', checkPassword, login);
router.post('/signout', logout);

router.use('/users', auth, users);
router.use('/movies', auth, movies);

router.all('/*', () => {
  throw new NotFoundErr('Запрашиваемый ресурс не найден');
});

module.exports = router;
