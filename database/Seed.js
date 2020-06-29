const db = require('./index.js');
var faker = require('faker');
const Guitar = require('./Model.js');

const seedDB = function() {
  var data = [];
  var dataCount = 150;

  //create data set with random input for amount (dataCount)

  var conditionMaker = function() {
    var condition = Math.floor(Math.random() * 1);
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
    var fakename = faker.company.companyName() + '\n' + faker.commerce.productAdjective() + '\n' + faker.commerce.productName() + '\n' + faker.commerce.color();
    var fakeguitarImage = imageMaker();
    var fakeReviewCount = Math.floor(Math.random() * 500);
    var fakeRatings = Math.floor(Math.random() * 5);
    var fakePrice = '$' + faker.commerce.price();
    var fakeCondition = conditionMaker();
    var group = Math.floor(Math.random() * 100);

    var dataBulk = {
      name: fakename,
      guitarImage: fakeguitarImage,
      Ratings: fakeRatings,
      ReviewCount: fakeReviewCount,
      Price: fakePrice,
      Condition: fakeCondition,
      Group: group
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

