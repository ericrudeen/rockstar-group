const { Artist } = require('../models');

const artistdata = [
  {
    name: 'Taylor Swift',
  },
  {
    name: 'Michael Jackson',
  },
  {
    name: 'Drake',
  },
  {
    name: 'Nirvana',
  },
  {
    name: 'The Beatles',
  },
  {
    name: 'Queen',
  },
  {
    name: 'The Rolling Stones',
  },
  {
    name: 'Pink Floyd',
  },
  {
    name: 'Led Zeppelin',
  },
  {
    name: 'AC/DC',
  },
  {
    name: 'Van Halen',
  },
  {
    name: 'Foo Fighters',
  },
  {
    name: 'The Eagles',
  },
  {
    name: 'Lil Wayne',
  },
  {
    name: 'Eminem',
  },
  {
    name: '2Pac',
  },
  {
    name: 'Snoop Dogg',
  },
  {
    name: 'Cardi B',
  },
  {
    name: 'Megan Thee Stallion',
  },
  {
    name: 'Jay-Z',
  },
  {
    name: 'Chance, The Rapper',
  },
  {
    name: 'Nas',
  },
  {
    name: 'Post Malone',
  },
  {
    name: 'Mac Miller',
  },
  {
    name: 'Beyonce',
  },
  {
    name: 'Lady Gaga',
  },
  {
    name: 'Ariana Grande',
  },
  {
    name: 'Doja Cat',
  },
  {
    name: 'Justin Beiber',
  },
  {
    name: 'The Weeknd',
  },
  {
    name: 'Rihanna',
  },
  {
    name: 'Bruna Mars',
  },
  {
    name: 'Billie Eilish',
  },
  {
    name: 'Madonna',
  },
  {
    name: 'Britney Spears',
  },
  {
    name: 'Adele',
  },
  {
    name: 'Bryson Tiller',
  },
  {
    name: 'Usher',
  },
  {
    name: 'Alicia Keys',
  },
  {
    name: 'Mary J. Blige',
  },
  {
    name: 'John Legend',
  },
  {
    name: 'Aretha Franklin',
  },
  {
    name: 'Giveon',
  },
  {
    name: 'Stevie Wonder',
  },
  {
    name: 'Marvin Gaye',
  },
  {
    name: 'Frank Ocean',
  },
  {
    name: 'BJ The Chicago Kid',
  },
  {
    name: 'Toby Keith',
  },
  {
    name: 'Garth Brooks',
  },
  {
    name: 'Luke Bryan',
  },
  {
    name: 'Luke Combs',
  },
  {
    name: 'Blake Shelton',
  },
  {
    name: 'Dolly Parton',
  },
  {
    name: 'Tim McGraw',
  },
  {
    name: 'Carrie Underwood',
  },
  {
    name: 'Jason Aldean',
  },
  {
    name: 'Brad Praisley',
  },
  {
    name: 'Miles Davis',
  },
  {
    name: 'Duke Ellington',
  },
  {
    name: 'Luis Armstrong',
  },
  {
    name: 'Charlie Parker',
  },
  {
    name: 'Frank Sinatra',
  },
  {
    name: 'Ellie Fitzgerald',
  },
  {
    name: 'Nat King Cole',
  },
  {
    name: 'John Coltrane',
  },
  {
    name: 'Thelonious Monk',
  },
  {
    name: 'Dizzy Gellespie',
  },
  {
    name: 'Herbie Hancock',
  },
  {
    name: 'Skrillex',
  },
  {
    name: 'Chainsmokers',
  },
  {
    name: 'Steve Aoki',
  },
  {
    name: 'Diplo',
  },
  {
    name: 'Avicii',
  },
  {
    name: 'Deadmau5',
  },
  {
    name: 'Zedd',
  },
  {
    name: 'Calvin Harris',
  },
  {
    name: 'Flume',
  },
  {
    name: 'Alesso',
  },
  {
    name: 'Bob Marley',
  },
  {
    name: 'Peter Tosh',
  },
  {
    name: 'Damian Marley',
  },
  {
    name: 'Rebelution',
  },
  {
    name: 'Iration',
  },
  {
    name: 'Desmond Dekker',
  },
  {
    name: 'Jimmy Cliff',
  },
  {
    name: 'Fela Kuti',
  },
  {
    name: 'Dennis Brown',
  },
  {
    name: 'Snoop Lion',
  },
  {
    name: 'Metallica',
  },
  {
    name: 'Pantera',
  },
  {
    name: 'Black Sabbath',
  },
  {
    name: 'Iron Maiden',
  },
  {
    name: 'Judas Priest',
  },
  {
    name: 'Scorpions',
  },
  {
    name: 'Slipknot',
  },
  {
    name: 'Korn',
  },
  {
    name: 'Motley Cru',
  },
  {
    name: 'Tool',
  },
  {
    name: 'Slayer',
  },
  {
    name: 'System of a Down',
  },
  {
    name: 'Green Day',
  },
  {
    name: 'Rancid',
  },
  {
    name: 'Misfits',
  },
  {
    name: 'Blink-182',
  },
  {
    name: 'Ramones',
  },
  {
    name: 'Black Flag',
  },
  {
    name: 'Social Distortion',
  },
  {
    name: 'The Offspring',
  },
  {
    name: 'Rage Against The Machine',
  },
  {
    name: 'Iggy Pop',
  },
  {
    name: 'My Chemical Romance',
  },
  {
    name: 'Red Hot Chili Peppers',
  },
  {
    name: 'Pearl Jam',
  },
  {
    name: 'The Killers',
  },
  {
    name: 'Weezer',
  },
  {
    name: 'Coldplay',
  },
  {
    name: 'R.E.M.',
  },
  {
    name: 'Artic Monkeys',
  },
  {
    name: 'The Smashing Pumpkins',
  },
  {
    name: 'The Cure',
  },
  {
    name: 'Imagine Dragons',
  },
  {
    name: 'Mulan',
  },
  {
    name: 'Lion King',
  },
  {
    name: 'Cinderella',
  },
  {
    name: 'The Little Mermaid',
  },
  {
    name: 'The Beauty and The Beast',
  },
  {
    name: 'Aladdin',
  },
  {
    name: 'Sleeping Beauty',
  },
  {
    name: 'Frozen',
  },
  {
    name: 'Snow White',
  },
  {
    name: 'Goofy Movie',
  },

] 

const seedArtist = () => Artist.bulkCreate(artistdata);

module.exports = seedArtist;