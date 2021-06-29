const { Match } = require('../models');

const matchdata = [
  {
    liker:1,
    likee:2
  },
  {
    liker:3,
    likee:2
  },
  {
    liker:3,
    likee:1
  },
  {
    liker:2,
    likee:3
  },
  {
    liker:2,
    likee:1
  },

];

const matchUser = () => Match.bulkCreate(matchdata);

module.exports = matchUser;