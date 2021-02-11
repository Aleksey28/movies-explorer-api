require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const users = require('./routes/users');
const movies = require('./routes/movies');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { createUser, login, logout } = require('./controllers/users');
const checkPassword = require('./middlewares/check-password');
const auth = require('./middlewares/auth');
const NotFoundErr = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;
const app = express();

// const whiteList = [
//   'http://localhost:3000',
//   'https://localhost:3000',
//   'http://localhost:3001',
//   'https://localhost:3001',
// ];

// const corsOptions = {
//   origin(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };
//
// app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use(requestLogger);

app.post('/signup', checkPassword, createUser);
app.post('/signin', checkPassword, login);
app.post('/signout', logout);

app.use('/users', auth, users);
app.use('/movies', auth, movies);

app.all('/*', () => {
  throw new NotFoundErr('Запрашиваемый ресурс не найден');
});

app.use(errorLogger);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500 ? 'На сервере произошла ошибка =('
        : message,
    });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
