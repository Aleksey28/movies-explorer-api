require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { createUser } = require('./controllers/users');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());

app.post('/signup', createUser);
app.use('/users', users);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
