const { Match } = require('../models');

const matchdata = [
  {
    liker:1,
    likee:2
  },
];

const matchUser = () => Match.bulkCreate(matchdata);

module.exports = matchUser;