const { User } = require('../models');

const userdata = [
  {
    name: 'Eric Rudeen',
    email: 'ericrudeen@gmail.com',
    password: 'password',
    phone_number: 8582042468,
    age: 26,
    gender: 'n/a',
    interested_in: 'n/a',
    location: 'San Diego',
    bio: 'Hi, my name is Eric',
  },
  
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;