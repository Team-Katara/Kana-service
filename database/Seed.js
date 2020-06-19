const db = require('./index.js');
var faker = require('faker');
const Guitar = require('./Model.js');

// const sampleImages = [
//   {
//     name: 'Cool Guitar',
//     guitarImage: faker.image.imageUrl(),
//     Ratings: '15',
//     Price: faker.commerce.price(),
//     Condition: 'New'
//   },
//   {
//     name: 'Okay Guitar',
//     guitarImage: faker.image.imageUrl(),
//     Ratings: '5',
//     Price: faker.commerce.price(),
//     Condition: 'Old'
//   }
// ];



const seedDB = function() {
  var data = [];
  var dataCount = 10;

  //create data set with random input for amount (dataCount)
  for (var i = 0; i <= dataCount; i++) {
    var fakename = faker.commerce.productName();
    var fakeguitarImage = faker.image.imageUrl();
    var fakeRatings = Math.floor(Math.random() * 5);
    var fakePrice = faker.commerce.price();
    var fakeCondition = 'new';

    var dataBulk = {
      name: fakename,
      guitarImage: fakeguitarImage,
      Ratings: fakeRatings,
      Price: fakePrice,
      Condition: fakeCondition
    };

    data.push(dataBulk);
  }

  return data;
};


//seeder function
const insertData = function() {
  Guitar.create(seedDB(), function(err) {
    if (err) { console.log('error seeding:', err); }
  })
    .then(() => db.disconnect());
};

insertData();