const db = require('./index.js');
var faker = require('faker');
const Guitar = require('./Model.js');

const seedDB = function() {
  var data = [];
  var dataCount = 10;

  //create data set with random input for amount (dataCount)

  var conditionMaker = function() {
    var condition = Math.random();

    if (condition === 0) {
      return 'New';
    } else {
      return 'Old';
    }
  };

  var imageMaker = function() {
    var baseURL = 'https://picsum.photos/200/300?random=';
    var randomize = Math.floor(Math.random() * 100);
    return baseURL + randomize;
  };

  for (var i = 0; i <= dataCount; i++) {
    var fakename = faker.commerce.productName();
    var fakeguitarImage = imageMaker();
    var fakeRatings = Math.floor(Math.random() * 5);
    var fakePrice = '$' + faker.commerce.price();
    var fakeCondition = conditionMaker();

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