const { User_Artist } = require('../models');

const userArtistData = [
    {
        user_id:1,artist_id:1,
    },
    {
        user_id:1,artist_id:2,
    },
    {
        user_id:1,artist_id:3,
    },
    {
        user_id:1,artist_id:4,
    },
]

const seed = () => User_Artist.bulkCreate(userArtistData);
  
module.exports = seed;