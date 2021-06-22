const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedArtist = require('./artistData');
const seedGenre = require('./genreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedArtist();

  await seedGenre();

  process.exit(0);
};

seedAll();