const db = require('./index.js');
var faker = require('faker');
const Guitar = require('./Model.js');

const sampleImages = [
  {
    name: 'Cool Guitar',
    guitarImage: faker.image.imageUrl(),
    Ratings: '15',
    Price: faker.commerce.price(),
    Condition: 'New'
  },
  {
    name: 'Okay Guitar',
    guitarImage: faker.image.imageUrl(),
    Ratings: '5',
    Price: faker.commerce.price(),
    Condition: 'Old'
  }
];


//seeder function
const insertSampleImages = function() {
  Guitar.create(sampleImages, function(err) {
    if (err) { console.log('error seeding'); }
  })
    .then(() => db.disconnect());
};

insertSampleImages();