const User = require('./User');
const Match = require('./Match');

User.hasMany(Match, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Match.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Match};