const { Genre } = require('../models');

const genredata = [
  {
    name: 'Pop',
  },
  {
    name: 'Rock',
  },
  {
    name: 'Hip-Hop',
  },
  {
    name: 'R&B',
  },
  {
    name: 'Country',
  },
  {
    name: 'Jazz',
  },
  {
    name: 'EDM',
  },
  {
    name: 'Reggae',
  },
  {
    name: 'Metal',
  },
  {
    name: 'Punk',
  },
  {
    name: 'Alterative',
  },
  {
    name: 'Disney',
  },
];

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;