const User = require('./User');
const Match = require('./Match');
const Artist = require('./artist');
const Genre = require('./genre');
const User_Artist = require('./user_artist');
const User_Genre = require('./user_genre');

User.hasMany(Match, {
    foreignKey: 'liker', as:'liker-',
    onDelete: 'CASCADE'
});

Match.belongsTo(User, {
    foreignKey: 'liker', as:'liker-'
});

User.hasMany(Match, {
    foreignKey: 'likee', as:'likee-',
    onDelete: 'CASCADE'
});

Match.belongsTo(User, {
    foreignKey: 'likee',  as:'likee-'
});

// User.belongsToMany(User, { through:{
//     model:Match, 
// }, as:'likee', foreignKey: 'id'
// });

// User.belongsToMany(User, { through:{
//     model:Match, 
// }, as:'liker', foreignKey: 'id'
// });

User.belongsToMany(Artist, { through: {
    model:User_Artist
}
});

User.belongsToMany(Genre, { through: {
    model:User_Genre
}
});

// Artist.belongsToMany(User, { through: {
//     model:User_Artist
// }
//     // foreignKey: 'user_id',
//     // onDelete: 'CASCADE'
// });

// User.belongsToMany(Artist, { through: {
//     model:User_Artist
// }
//     // foreignKey: 'user_id',
//     // onDelete: 'CASCADE'
// });

// User_Artist.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Artist.hasMany(User_Artist, {
//     foreignKey: 'artist_id',
//     onDelete: 'CASCADE'
// });

// User_Artist.belongsTo(Artist, {
//     foreignKey: 'artist_id'
// });

Genre.hasMany(User_Genre, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
});

User_Genre.belongsTo(Genre, {
    foreignKey: 'genre_id'
});



module.exports = {User, Match, Artist, Genre, User_Artist, User_Genre};