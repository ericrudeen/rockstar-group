const { Artist } = require('../models');

const artistdata = [
  {
    name: 'Taylor Swift',
  },
];

const seedArtist = () => Artist.bulkCreate(artistdata);

module.exports = seedArtist;