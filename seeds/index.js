const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedArtist = require('./artistData');
const seedGenre = require('./genreData');
const seedUserArtist = require('./userArtistData');
const seedUserGenre = require('./userGenreData');
const seedMatch = require('./matchData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedArtist();

  await seedGenre();

  await seedUserArtist();
  
  await seedUserGenre();

  await seedMatch();

  process.exit(0);
};

seedAll();