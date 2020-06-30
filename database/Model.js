const mongoose = require('mongoose');
const db = require('./index.js');

const guitarSchema = new mongoose.Schema({
  Group: Number,
  SimilarItems: [{
    name: String,
    guitarImage: String,
    Ratings: Number,
    ReviewCount: Number,
    Price: String,
    Condition: String,
  }]
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;