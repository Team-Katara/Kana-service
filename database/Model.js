const mongoose = require('mongoose');
const db = require('./index.js');

const guitarSchema = new mongoose.Schema({
  name: String,
  guitarImage: String,
  Ratings: Number,
  ReviewCount: Number,
  Price: String,
  Condition: String,
  Group: Number
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;