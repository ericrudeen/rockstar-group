const { Genre } = require('../models');

const genredata = [
  {
    name: 'Pop',
  },
];

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;