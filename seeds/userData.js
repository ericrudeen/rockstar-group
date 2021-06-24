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
  {
    name: 'Herm Garcia',
    email: 'herm@gmail.com',
    password: 'password',
    phone_number: 8582042467,
    age: 21,
    gender: 'n/a',
    interested_in: 'n/a',
    location: 'San Diego',
    bio: 'Hi, my name is Herm',
  },
  {
    name: 'Vanessa B',
    email: 'vane@gmail.com',
    password: 'password',
    phone_number: 8582042466,
    age: 24,
    gender: 'n/a',
    interested_in: 'n/a',
    location: 'San Diego',
    bio: 'Hi, my name is Vanessa',
  },
  
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;