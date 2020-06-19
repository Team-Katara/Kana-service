const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var faker = require('faker');

console.log(faker.image.imageUrl());
console.log(faker.name.jobTitle());