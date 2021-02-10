const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: 'Не верно указан адрес.',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: 8,
  },
});

module.exports = mongoose.model('user', userSchema);
