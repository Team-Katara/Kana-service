const db = require('./index.js');
var faker = require('faker');
const Guitar = require('./Model.js');

const seedDB = function() {
  var data = [];
  var dataCount = 100;

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
    var baseURL = 'https://fec-katara-center.s3.amazonaws.com/';
    var randomize = Math.floor(Math.random() * 100);
    var urlsize = '-200x300.jpg';
    return baseURL + randomize + urlsize;
  };

  //creates specified number of data sets
  for (var i = 1; i <= dataCount; i++) {
    var group = i;

    //creates sets of 'similar items'
    var similarItems = [];
    //each id has 3 to 9 similar items
    var numberOfItems = Math.floor(Math.random() * 6 + 3);

    for (var j = 0; j < numberOfItems; j++) {
      var fakename = faker.company.companyName() + '\n' + faker.commerce.productAdjective() + '\n' + faker.commerce.productName() + '\n' + faker.commerce.color();
      var fakeguitarImage = imageMaker();
      var fakeReviewCount = Math.floor(Math.random() * 500);
      var fakeRatings = Math.floor(Math.random() * 5);
      var fakePrice = '$' + faker.commerce.price();
      var fakeCondition = conditionMaker();

      var itemDescription = {
        name: fakename,
        guitarImage: fakeguitarImage,
        Ratings: fakeRatings,
        ReviewCount: fakeReviewCount,
        Price: fakePrice,
        Condition: fakeCondition
      };
      similarItems.push(itemDescription);
    }

    var dataBulk = {
      Group: group,
      SimilarItems: similarItems
    };

    data.push(dataBulk);
  }

  return data;
};


//seeder function
const insertData = function() {
  var data = seedDB();
  Guitar.create(data)
    .then(() => db.close())
    .catch(err => console.log(err));
};

insertData();

