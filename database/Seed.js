const db = require('./index.js')
const Guitar = require('./Model.js')

const sampleImages = [
  {
    name: 'Cool Guitar',
    guitarImage: 'https://source.unsplash.com/1600x900/?cat',
    Ratings: '15',
    Price: '$100',
    Condition: 'New'
  },
  {
    name: 'Okay Guitar',
    guitarImage: 'https://source.unsplash.com/1600x900/?corgi',
    Ratings: '5',
    Price: '$50',
    Condition: 'Old'

  }
]

const insertSampleImages = function() {
  Guitar.create(sampleImages, function(err){
    if(err) { console.log('error seeding'); }
  })
    .then(() => db.disconnect());
};

insertSampleImages();