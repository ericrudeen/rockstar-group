const User = require('./User');
const Match = require('./Match');
const Artist = require('./artist');
const Genre = require('./genre');
const User_Artist = require('./user_artist');
const User_Genre = require('./user_genre');

User.hasMany(Match, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Match.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(User_Genre, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User_Genre.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(User_Artist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User_Artist.belongsTo(User, {
    foreignKey: 'user_id'
});

Genre.hasMany(User_Genre, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
});

User_Genre.belongsTo(Genre, {
    foreignKey: 'genre_id'
});

Artist.hasMany(User_Artist, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
});

User_Artist.belongsTo(Artist, {
    foreignKey: 'artist_id'
});

module.exports = {User, Match, Artist, Genre, User_Artist, User_Genre};