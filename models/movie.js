const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'Не верно указана ссылка',
    },
  },
  trailer: {
    type: String,
    require: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'Не верно указана ссылка',
    },
  },
  thumbnail: {
    type: String,
    require: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'Не верно указана ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  movieId: {
    type: String,
    require: true,
  },
  nameRU: {
    type: String,
    require: true,
  },
  nameEN: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
