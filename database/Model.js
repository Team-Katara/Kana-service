const mongoose = require('mongoose');
const db = require('./index.js');

const guitarSchema = new mongoose.Schema({
  name : String,
  guitarImage: String,
  Ratings: String,
  Price: String,
  Condition: String
})

const Guitar = mongoose.model("Guitar", guitarSchema);

module.exports = Guitar;