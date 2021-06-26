const User = require("./User");
const Match = require("./Match");
const Artist = require("./artist");
const Genre = require("./genre");
const User_Artist = require("./user_artist");
const User_Genre = require("./user_genre");

User.hasMany(Match, {
  foreignKey: "liker",
  as: "liker_user",
});
Match.belongsTo(User, {
  foreignKey: "liker",
  as: "liker_user",
});
User.hasMany(Match, {
  foreignKey: "likee",
  as: "likee_user",
  onDelete: "CASCADE",
});
Match.belongsTo(User, {
  foreignKey: "likee",
  as: "likee_user",
});

User.belongsToMany(Artist, {
  through: {
    model: User_Artist,
  },
});
User.belongsToMany(Genre, {
  through: {
    model: User_Genre,
  },
});
Genre.hasMany(User_Genre, {
  foreignKey: "genre_id",
  onDelete: "CASCADE",
});
User_Genre.belongsTo(Genre, {
  foreignKey: "genre_id",
});

module.exports = { User, Match, Artist, Genre, User_Artist, User_Genre };
