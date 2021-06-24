const { User_Genre } = require('../models');

const userGenreData = [
    {
        user_id:1,genre_id:1,
    },
    {
        user_id:1,genre_id:2,
    },
    {
        user_id:1,genre_id:3,
    },
    {
        user_id:1,genre_id:4,
    },
]

const seed = () => User_Genre.bulkCreate(userGenreData);
  
module.exports = seed;