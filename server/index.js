const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Guitar = require('../database/Model.js');

app.use (express.static('./dist'));

app.get ('/api/similaritems', (req, res) => {
  Guitar.find( (err, data) => {
    if (err) {
      console.log ('error finding similar items data');
    } else {
      console.log(data)
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;