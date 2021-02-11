const router = require('express').Router();

const {
  getUserMovies,
  createdMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getUserMovies);
router.post('/', createdMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router;
